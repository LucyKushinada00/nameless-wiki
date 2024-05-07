---
title: OnePlus 9 Pro
sidebar_position: 5
---

## Prerequisites

:::info
The firmware for this device is included with the ROM.
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Required Images: boot.img, dtbo.img, vendor_boot.img ([Download here](/docs/getting-started/downloads/oneplus/lemonadep.md))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/oneplus/lemonadep.md))
- Empty Super Image ([Download here](https://mirrorbits.lineageos.org/full/lemonadep/20240429/super_empty.img))

### Instructions when coming from OOS

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot your device into fastboot with `adb reboot fastboot` if you're in system or `fastboot reboot fastboot` if you're in the bootloader or recovery.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
3. Verify your device is detected by running `fastboot devices` on CMD and flash the downloaded images using the following commands:
```
fastboot flash --slot=all boot boot.img
fastboot flash --slot=all dtbo dtbo.img
fastboot flash --slot=all vendor_boot vendor_boot.img
``` 
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
5. Reboot your phone into recovery mode, click "Install Update" -> "ADB Sideload".
6. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
7. Click back arrow, then click "Advanced" -> "Reboot to bootloader".
8. Format your device from fastboot using `fastboot -w` and flash the empty super partition to wipe super using `fastboot wipe-super super_empty.img`.
9. After the format is completed, reboot to system.

### Instructions when coming from a custom ROM

1. Boot into recovery using `adb reboot recovery` if you're on system and `fastboot reboot recovery` if you're on fastboot or bootloader.
2. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
3. Click back arrow, then click "Advanced" -> "Reboot to bootloader".
4. Format your device from fastboot using `fastboot -w` and flash the empty super partition to wipe super using `fastboot wipe-super super_empty.img`.
5. After the format is completed, reboot to system.