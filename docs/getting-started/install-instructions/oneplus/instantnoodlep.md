---
title: For Oneplus 8 Pro
sidebar_position: 2
---

## Prerequisites

:::info
The firmware for this device is included with the ROM.
::: 
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Required Images: boot.img, recovery.img, vbmeta.img ([Download here](/docs/getting-started/downloads/instantnoodlep.md))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/instantnoodlep.md))

### Instructions when coming from OOS

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot your device into fastboot with `adb reboot fastboot` if you're in system or `fastboot reboot fastboot` if you're in the bootloader or recovery.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
3. Verify your device is detected by running `fastboot devices` on CMD and flash the downloaded images using the following commands:
```
fastboot flash --slot=all recovery recovery.img
fastboot flash --slot=all boot boot.img
fastboot flash --slot=all vbmeta vbmeta.img
``` 
:::warning
If you're flashing a legacy version of the rom (Nameless 13) you'll also need to flash `vbemata_system` using `fastboot flash --slot=all vbmeta_system vbmeta_sytem.img`.
:::
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
5. Reboot your phone into recovery mode, click "Install Update" -> "ADB Sideload".
6. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
7. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"
8. After the format is completed, click the back arrow and then click "Reboot to system".

### Instructions when coming from a custom ROM

1. Boot into recovery using `adb reboot recovery` if you're on system and `fastboot reboot recovery` if you're on fastboot or bootloader.
2. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
3. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"
4. After the format is completed, click the back arrow and then click "Reboot to system".