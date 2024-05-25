---
title: Nothing Phone (2)
sidebar_position: 1
---

## Prerequisites

:::info
The firmware for this device is included with the ROM.
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Required Images: boot.img, recovery.img, vendor_boot.img ([Download here](/docs/getting-started/downloads/nothing/pong.md))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/nothing/pong.md))

### Instructions when coming from NOS

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot your device into recovery with `adb reboot recovery` and factory reset it.
3. Reboot into fastboot with `fastboot reboot fastboot`.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
4. Verify your device is detected by running `fastboot devices` on CMD and flash the downloaded images using the following commands:
```
fastboot flash boot boot.img
fastboot flash recovery recovery.img
fastboot flash vendor_boot vendor_boot.img
```
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
5. Boot back into recovery mode by using `fastboot reboot recovery`, then click "Install Update" -> "ADB Sideload".
6. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
7. After the flash is completed, click the back arrow and then click "Reboot to system".

### Instructions when coming from a custom ROM

1. Boot into recovery using `adb reboot recovery` if you're on system and `fastboot reboot recovery` if you're on fastboot or bootloader.
2. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
3. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"
4. After the format is completed, click the back arrow and then click "Reboot to system".