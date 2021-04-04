package com.experiments.mymodule

import com.cmine.sharedbusinesslogic.FibonacciCalculator
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class Fibonacci(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Fibonacci"
    }

    @ReactMethod
    fun fibonacci(number: Int, promise: Promise) {
        val result: Int = FibonacciCalculator.fibonacciInternal(number);
        promise.resolve(result)
    }



}