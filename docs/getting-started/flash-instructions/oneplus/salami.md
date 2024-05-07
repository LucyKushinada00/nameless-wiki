---
title: OnePlus 11
sidebar_position: 9
---

## Prerequisites

:::danger
For Nameless 14 builds on this device, flash the latest firmware from OOS 14.
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Required Images: boot.img, recovery.img, vbmeta_boot.img ([Download here](/docs/getting-started/downloads/oneplus/salami.md))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/oneplus/salami.md))
- Empty Super Image ([Download here](https://mirrorbits.lineageos.org/full/salami/20240503/super_empty.img))

### Instructions when coming from OOS

:::warning
Make sure you're on the latest compatible firmware on both slots, otherwise [flash the firmware](/docs/faq.md#ab-partitions-explained) before continuing with the following steps.
:::

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot your device into fastboot with `adb reboot fastboot` if you're in system or `fastboot reboot fastboot` if you're in the bootloader or recovery.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
3. Verify your device is detected by running `fastboot devices` on CMD and flash the downloaded images using the following commands:
```
fastboot flash --slot=all recovery recovery.img
fastboot flash --slot=all boot boot.img
fastboot flash --slot=all vbmeta_boot vbmeta_boot.img
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

:::warning
If the custom ROM you're on isn't based on the same firmware version [flash the firmware](/docs/faq.md#ab-partitions-explained) before continuing with the following steps.
:::

1. Boot into recovery using `adb reboot recovery` if you're on system and `fastboot reboot recovery` if you're on fastboot or bootloader.
2. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
3. Click back arrow, then click "Advanced" -> "Reboot to bootloader".
4. Format your device from fastboot using `fastboot -w` and flash the empty super partition to wipe super using `fastboot wipe-super super_empty.img`.
4. After the format is completed, reboot to system.