// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";

contract AMM {
    using SafeMath for uint256;

    struct Liquidity {
        uint256 balanceA;
        uint256 balanceB;
    }

    mapping (address => Liquidity) public liquidity;

    event LiquidityAdded(address indexed liquidityProvider, uint256 amountA, uint256 amountB);
    event LiquidityRemoved(address indexed liquidityProvider, uint256 amountA, uint256 amountB);
    event SwapExecuted(address indexed user, uint256 amountAOut, uint256 amountBOut, uint256 amountAIn, uint256 amountBIn);

    function addLiquidity(address liquidityProvider, uint256 amountA, uint256 amountB) public {
        liquidity[liquidityProvider].balanceA = liquidity[liquidityProvider].balanceA.add(amountA);
        liquidity[liquidityProvider].balanceB = liquidity[liquidityProvider].balanceB.add(amountB);
        emit LiquidityAdded(liquidityProvider, amountA, amountB);
    }

    function removeLiquidity(address liquidityProvider, uint256 amountA, uint256 amountB) public {
        liquidity[liquidityProvider].balanceA = liquidity[liquidityProvider].balanceA.sub(amountA);
        liquidity[liquidityProvider].balanceB = liquidity[liquidityProvider].balanceB.sub(amountB);
        emit LiquidityRemoved(liquidityProvider, amountA, amountB);
    }

    function swapAtoB(address user, uint256 amountA) public {
        uint256 balanceB = (amountA.mul(liquidity[user].balanceB))
                            .div(liquidity[user].balanceA);
        liquidity[user].balanceA = liquidity[user].balanceA.sub(amountA);
        liquidity[user].balanceB = liquidity[user].balanceB.add(balanceB);
        emit SwapExecuted(user, amountA, balanceB, 0, 0);
    }

    function swapBtoA(address user, uint256 amountB) public {
        uint256 balanceA = (amountB.mul(liquidity[user].balanceA))
                            .div(liquidity[user].balanceB);
        liquidity[user].balanceB = liquidity[user].balanceB.sub(amountB);
        liquidity[user].balanceA = liquidity[user].balanceA.add(balanceA);
        emit SwapExecuted(user, 0, 0, balanceA, amountB);
    }
}
