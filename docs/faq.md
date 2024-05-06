---
title: Frequently Asked Questions
sidebar_position: 3
---

If you have a question, please read or search this page before asking. It saves time for everyone — especially you.

[You can also search for the answer to your question](/search)

## Links

<details>
  <summary>Links</summary>
  <div>
  - [Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
  - [Google USB Drivers](https://dl.google.com/android/repository/latest_usb_driver_windows.zip) ([How to install?](#installing-google-usb-drivers))
  - [Qualcomm Drivers](https://drive.google.com/file/d/1zKPFtcc2X_Nf70mcvn9TBu60bHl6Q3cP)
  - [APK to enable local update option in OOS12+](https://oxygenos.oneplus.net/OPLocalUpdate_For_Android12.apk)
  - [MSM tool](https://onepluscommunityserver.com/list/Unbrick_Tools/)
  </div>
</details>

## Enabling Developer Options

<details>
  <summary>Enabling Developer Options</summary>
  <div>
  1. You can unlock developer options by tapping the build number 7 times rapidly in About Phone/About Device. Open the Developer options and enable USB debugging. Connect your phone to PC and type `adb devices`.
  2. A pop-up will come up on your phone. Check always allow and then okay. Type `adb devices` again and you should now see your device in the output.
  </div>
</details>

## How to enter EDL Mode

<details>
  <summary>How to enter EDL Mode</summary>
  <div>
  There are upto three ways to boot into EDL depending on your device:
  - If you can boot into system and have debugging on run `adb reboot edl`.
  - Another way of getting into EDL mode is used if your phone no longer boots into Android. You have to completely power down the phone. Press both the volume buttons simultaneously and hold for 5 seconds **(NO POWER BUTTON)** and connect to PC. For devices older than the 7 series, only the volume up button for 5 seconds is required.
  - The last method of getting into EDL mode is using TWRP. It's the bottom option in the reboot menu. Note: This method doesn't require for TWRP to be installed. You can simply fastboot boot into TWRP to achieve the desire results.

  :::info
  Once properly in EDL, your screen will turn completely black (there's no text saying it's in EDL mode as if the phone is off) and automatically reboot in 10 seconds if not connected properly to MSM tool. Don't panic if you don't see anything on the screen and the phone reboots. This is normal.
  :::

  </div>
</details>

## How to use MSM tool

:::note
  Before using MSM make sure the following requirements are met:
    -  Make sure you have the proper MSM downloaded which includes the proper device, region, and OS version from the [OP community server](https://onepluscommunityserver.com/list/Unbrick_Tools/).
    - Have the [Qualcomm drivers](#links) installed.
    - **ONLY** use an original OnePlus red cable to connect to PC. This is the recommended cable for data transfer. Try to use a USB 2.0 port if your PC has one.
    - **ALWAYS** run the MSM.exe in administrator mode. Do this by either right clicking the .exe and choosing "Run as administrator" or permanently set this by right clicking the .exe and selecting Properties and then hit the Compatibility tab. Check the box that says "Run this program as administrator", hit the Apply button, and then the OK button.
  :::

<details>
  <summary>How to use MSM tool</summary>
  <div>
  </div>
  MSM uses Qualcomm's Emergency Download (EDL) mode to flash your phone to stock and relock your bootloader if unlocked. There are three methods to get into EDL mode:
  1. If you've not already, [enable developer options and USB](#enabling-developer-options) debugging on your device.
  2. If the device isn't authorized a pop-up will come up on your phone. Check always allow and then okay. Type adb devices again and you should now see numbers and letters. Now boot into EDL ([Instructions](#how-to-enter-edl-mode)).
  :::info
  Once properly in EDL, your screen will turn completely black (there's no text saying it's in EDL mode as if the phone is off) and automatically reboot in 10 seconds if not connected properly to MSM tool. Don't panic if you don't see anything on the screen and the phone reboots. This is normal.
  :::
  3. Run the MSM.exe as an administrator. When a menu comes up, choose "Others" in User type and hit next. Keep Sha256 and Auto Reboot checked. Do note the Start button at the top left.
  4. If your MSM screen comes up complete blank, keep the app open and put your phone in EDL mode. After the phone reboots and keeping it connected to the PC, put the phone back in EDL mode and hit the "Enum" button in the MSM tool. Your MSM screen should now have at least one COM port showing with connections status as N/A. If you have more than one COM port showing, that is okay.
  5. Once you have a COM port showing, put the phone in EDL mode (if it's not already), and the connection status should change to connected.
  :::note
  Special note for OnePlus 8T owners: The first few batches of 8T's were shipped with DDR4 memory and since then they have shipped with DDR5 memory. Your MSM tool has a tab to specifically select which RAM you have. Default is to flash to either, but this is slower. You can find out which RAM you have by opening a terminal app on the phone and entering `getprop ro.boot.ddr_type` or `adb shell getprop ro.boot.ddr_type` from PC. The results of this command is either 0 or 1. DDR4 is 0 and DDR5 is 1.
  :::
  6. Once connected, you only have 10 seconds to press the Start button at the top left before the phone will automatically reboot out of EDL mode, so be prepared.
  :::note
  There are [reports from OP9 users](https://forum.xda-developers.com/t/msm-cannot-recognize-your-phone-aka-sahara-connection-error-check-this.4308601/) that the any OP9 MSM tool from any region fails to flash their device with Sahara Communication Failed or preload param errors.  The fix is to flash the device with the Indian 9Pro MSM and then you'll be able to flash the OP9 MSM.
  :::
  7. Once you press the Start button, the phone's A slot will be flashed to the firmware version you selected. It will take about 5 minutes to install. **DO NOT** touch the phone or close MSM during the process. You could potentially hard brick your phone. Once completed, your phone will be completely wiped, the bootloader will lock, and the phone will automatically boot into Android. You will set up the phone normally as if you had just taken it out of the box. As most MSM tools are from an older firmware version you're going to want to OTA or local upgrade to what is current.
  <div>
  </div>
</details>

## How to unlock bootloader

:::warning
Unlocking the bootloader will trigger a full system wipe so make sure to backup your important data first. Also, on some devices running OOS14+ sometimes the partitions break and hence it's not possible to boot into fastboot in order to follow the instructions. In this case you'll have to downgrade to OOS13 to continue.
:::
:::note
  Before trying to unlock your bootloader make sure the following requirements are met:
    - [Google USB Drivers](#links) are installed.
    - [Platform Tools](#links) are properly installed.
:::

<details>
  <summary>Unlocking bootloader</summary>
  <div>
    1. Enable `OEM Unlocking` from developer options. ([How to enable developer options?](#enabling-developer-options))
    2. Connect your phone to PC with USB cable.
    3. Open cmd in the folder where platform-tools are located.
    4. Check that your PC finds your phone by typing adb devices. It should say:
    ```
    List of devices attached
    1b234567   device
    ```
    5. Reboot your device into bootloader by using `adb reboot bootloader`.
    6. Check that your PC finds your phone by typing `fastboot devices`. It should say:
    ```
    List of devices attached
    1b234567   fastboot
    ```
    7. Use command `fastboot flashing unlock` and use volume keys to select `unlock the bootloader` and confirm with power button.
:::note
    On some devices the above command might not work, in which case run `fastboot oem unlock`.
:::
  </div>
</details>

## A/B Partitions Explained

<details>
  <summary>A/B Partitions Explained</summary>
  <div>
  <p>Introduced with Android Nougat, A/B system updates use two sets of partitions referred to as slots (normally slot A and slot B). The system runs from the current slot while the partitions in the unused slot are not accessed by the running system during normal operation.</p>
  <p>They allow for a bootable system and minimal downtime during an OTA update. When a device is performing a seamless update, all the transferring is done while one system partition is running. This approach makes updates fault resistant by keeping the unused slot as a fallback. If an error occurs during or after an update, the system can roll back to the old slot and continue to work.</p>

  ### Flashing both slots
:::warning
Every nameless version works on a particular firmware version so it's important to make sure to flash the correct firmware on both slots to ensure safe OTA updates in the future.
:::
    You can ensure you're on the correct firmware on both slots by using one of the two mentioned methods:
    1. Download the full factory image of OOS from the list provided below based on the device you own then use the local update feature in system update to flash the zip. After you reboot, repeat the method to install OOS to the second (inactive) slot. It is very important that you **DO NOT** skip this step in the flashing instructions.
:::info
In OOS12 the local update options is disabled by default. You can enable it from developer settings or by using [local update apk](#links).
:::
    2. If you're on a custom recovery (not stock) you can flash [Wishmasterflo's](https://github.com/Wishmasterflo) [Firmware Flasher](https://github.com/Wishmasterflo/Firmware_flasher) which would automatically flash the firmware to both slots while also ensuring RAM compatibility in the cases where it's required.
  </div>
</details>

## How to root?
<details>
  <summary>How to root?</summary>
  <div>
:::note
- Make sure the magisk file is in the same folder with platform-tools.
- You don't need to change the file extension from apk to zip
:::
    - Download the latest version of [Magisk](https://github.com/topjohnwu/Magisk/releases) or [Kitsune Mask](https://huskydg.github.io/magisk-files/) and rename the file to `magisk.apk`.
    - Reboot to recovery.
    - Select Install Update -> ADB Sideload
    - Sideload the APK using `adb sideload magisk.apk`.
    - Reboot.
:::note
    In some cases the Magisk/Kitsune Mask app might not show up on the app drawer. If this happens just install the apk from above as a normal app and it should hook into the running prcocess and detect the installation. Sometimes the app might also ask for a reboot so go forward and do it.
:::

    ### How to maintain root?
    After installation of a new update you would normally lose root. In order to prevent that before rebooting to complete the update installation follow the following steps.
    - Open Magisk/Kitsune Mask app.
    - Click on install -> Install to Inactive Slot (After OTA).
    - Root would automatically be installed on the other slot and you'll be prompted to reboot.

  </div>
</details>

## Button Combinations

<details>
  <summary>Button Combinations</summary>
  <div>
  ### Recovery Mode
  - __Volume Down + Power__

  ### Fastboot Mode
  - __Volume Down + Volume Up + Power__

  ### EDL Mode
  - Power off the phone, press __Volume Down + Volume Up__ while connecting the USB cable.

  ### Safe Mode
  - Turn off your phone, turn it back on and keep __Volume Down__ pressed while phone is booting.
  :::note
  The button combinations might differ from device to device so if these don't work for you make sure to [google](https://www.google.com). Also in order to use the button combinations from __safe mode__ you'll need to boot into it from the power menu atleast once.
  :::

  </div>
</details>

## Installing Google USB Drivers

<details>
  <summary>Installing Google USB Drivers</summary>
  <div>
  <b>To install the Android USB driver on Windows, do the following:</b>
  1. Connect your Android device to your computer's USB port.
  2. From Windows Explorer, open **Computer Management**.
  3. In the **Computer Management** left pane, select **Device Manager**.
  4. In the **Device Manager** right pane, locate and expand **Portable Devices** or **Other Devices**, depending on which one you see.
  5. Right-click the name of the device you connected, and then select **Update Driver**.
  6. Click on **Browse my computer for drivers**.
  7. Click on **Let me pick from a list of available drivers from my computer** then **Show All Devices** and finally click on **Next**.
  8. Click on **Have Disk**, select the location where you've extracted the driver zip and click **OK**.
  9. Depending on your situation either install the **Android ADB Interface** (For System drivers), **Android Bootloader Interface** (For Fastboot/Bootloader Drivers).
  10. Click on **Next** on both the window and the pop-up and let the drivers install.
  </div>
</details>

## Common Problems

<details>
  <summary>Zygisk doesn't work even after enabling it from settings and rebooting.</summary>
  <div>
  Lsposed is currently broken on the latest release of nameless because it's based on A14 QPR2 and the vanilla version of lsposed is eol. Use this version instead https://github.com/mywalkb/LSPosed_mod/releases
  </div>
</details>

<details>
  <summary>Banking apps (and other apps) are just crashing on launch.</summary>
  <div>
  Most probably the issue is the apps detecting the unlocked bootloader and refusing to work. If you're not rooted then wait for the dev to update the device fingerprint and reboot ([Google recently started banning custom ROM fingerprints](https://news.ycombinator.com/item?id=36516315)). If you're rooted follow the instructions below:
  ### If you're using Vanilla magisk:
  1. Enable the options for `Zygisk` and `Enforce Denylist` from Magisk settings.
  2. After that add Google Play Services (GMS) and Google Play Store to the denylist.
  3. **Optional:** Install the `Shamiko` and `PIF Next` modules and reboot.
  ### If you're using Kitsune Mask:
  Enable the options for `Zygisk` and `MagiskHide` from Kitsune Mask settings.
  2. After that add `Google Play Services (GMS)` and `Google Play Store` to the MagiskHide list.
  3. **Optional:** Install the `PIF Next` module and reboot.
  </div>
</details>

<details>
  <summary>My Device isn't getting detected in EDL/Fastboot/Bootloader</summary>
  <div>
  This usually means there's a driver issue and your computer doesn't know how to handle this type of device. Install the [Google USB Drivers](#links) properly from the Links section.
  </div>
</details>

<details>
  <summary>`fastboot: unknown option -- disable-verity` during a flash</summary>
  <div>
  - **Use cmd, NOT powershell**.
  - Make sure [Platform Tools](#links) is the latest version (Do not use Minimal ADB and Fastboot.).
  - Make sure that the files you are going to flash are in the same folder with platform-tools.
  - If you already have platform tools installed (i.e. You can run adb commands even when outside the platform-tools folder), you need to make sure you're using the local version of platform tools and not the global installed version. You can do this by prefixing all `adb` and `fastboot` commands with `.\`. For example: `.\adb devices` instead of `adb devices`.
  </div>
</details>

<details>
  <summary>`adb error cannot read 'filename.zip'` during an ADB sideload</summary>
  <div>
  - **Use cmd, NOT powershell**.
  - Make sure [Platform Tools](#links) is the latest version (Do not use Minimal ADB and Fastboot.).
  - Make sure that the files you are going to flash are in the same folder with platform-tools.
  - If there are any spaces in your path to the file you're trying to flash then encapsulate them with double-inverted commas (For ex. `adb sideload "C:/Nameless AOSP/nameless.zip"`) and drag and drop the file between the inverted commas instead of manually typing in the path to avoid mistakes.
  </div>
</details>
