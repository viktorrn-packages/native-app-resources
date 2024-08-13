// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "NativeAppResources",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "NativeAppResources",
            targets: ["AppResourcesPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "AppResourcesPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AppResourcesPlugin"),
        .testTarget(
            name: "AppResourcesPluginTests",
            dependencies: ["AppResourcesPlugin"],
            path: "ios/Tests/AppResourcesPluginTests")
    ]
)