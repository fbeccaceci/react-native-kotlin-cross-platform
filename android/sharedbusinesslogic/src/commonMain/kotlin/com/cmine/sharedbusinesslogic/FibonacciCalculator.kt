package com.cmine.sharedbusinesslogic

class FibonacciCalculator {

    companion object {
        fun fibonacciInternal(number: Int): Int {
            if(number <= 1) {
                return 1;
            }
            return fibonacciInternal(number - 1) + fibonacciInternal(number - 2)
        }
    }

}