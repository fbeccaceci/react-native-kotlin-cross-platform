//
//  Fibonacci.m
//  experiments
//
//  Created by Fabrizio Beccaceci on 04/04/21.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Fibonacci, NSObject)

RCT_EXTERN_METHOD(fibonacci: (int)number
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
)

@end
