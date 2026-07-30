---
layout: post
title: Installing Syncfusion Grid SDK Mac Installer - Syncfusion
description: Learn how to install the Syncfusion Grid SDK Mac installer after downloading it from the Syncfusion website.
platform: Grid SDK
control: Installation and Deployment
documentation: ug
---

# Installing Syncfusion Grid SDK Mac Installer

## Resolving the macOS Gatekeeper Warning

When you run the Grid SDK Mac installer on macOS Catalina (10.15) or later, the following alert may be displayed.

![Gatekeeper alert](images/Mac_Catalina_MacOS_Alert1.png)

If you receive this alert, follow these steps to launch the installer:

1. Open **Finder** and navigate to the downloaded PKG file (typically in the `~/Downloads` folder).
2. Right-click the downloaded PKG file and select **Open With → Installer (Default)**. The following dialog appears.

   ![Open With dialog](images/Mac_Catalina_MacOS_Alert2.png)

3. Click **Open** to launch the installer window.

## Step-by-Step Installation

The steps below describe how to install the Grid SDK Mac installer.

1. Open the Syncfusion Grid SDK Mac installer (.pkg) file. The installer wizard opens. Click **Continue**.

   ![Welcome wizard](images/Mac_Installer1.png)

2. The Software License Agreement wizard will appear. Click the **Continue** button.

   ![License Agreement](images/Mac_Installer2.png)

3. The License Agreement confirmation window will appear. After you have read the Software License Agreement, click **Agree**.

   ![License Agree Confirmation](images/Mac_Installer3.png)

   N> An unlock key is not required to install the Grid SDK Mac installer.

4. The Destination Select wizard will appear. Select the disk on which to install the Grid SDK Mac installer, and then click **Continue**.

   ![Destination](images/Mac_Installer5.png)

5. The Installation Type wizard will appear. Choose **Standard Install** (default) for the standard set of files, or click **Customize** to select or deselect optional components. Click **Install** to begin the installation.

   ![Install Location](images/Mac_Installer6.png)

6. The Authentication window will appear. To begin the installation, enter the Mac administrator password and click **Install Software**.

   ![Authentication](images/Mac_Installer7.png)

7. The installation process begins on your machine.

   ![Installation progress](images/Mac_Installer8.png)

8. When the installation is complete, the summary screen is displayed. Click **Close** to exit the installation wizard.

   ![Installation Completed](images/Mac_Installer9.png)
   
   By default, Mac installer will install the files in following location.

   **Location:** {Documents}/Syncfusion/{version}/Grid SDK
   
   ![Installed Location](images/Mac_Installer10.png)

## License key registration in samples

After the installation, the license key is required to register the demo source that is included in the Mac installer. To learn about the steps for license registration for the ASP.NET Core - EJ2 samples in the Essential Studio Grid SDK Mac installer, please refer to this.

* Register the license key in the [Program.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-60) file if you created the ASP.NET Core web application with Visual Studio 2022 and .NET 6.0.
* Register the license key in Configure method of [Startup.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-50-or-net-31)