//
//  Fibonacci.swift
//  experiments
//
//  Created by Fabrizio Beccaceci on 04/04/21.
//

import Foundation
import sharedbusinesslogic

@objc(Fibonacci)
class Fibonacci: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc(fibonacci:resolver:rejecter:)
  func fibonacci(
    _ number: Int,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject:RCTPromiseRejectBlock
  ) -> Void {
    resolve(FibonacciCalculator.Companion().fibonacciInternal(number: Int32(number)))
  }
  
}
