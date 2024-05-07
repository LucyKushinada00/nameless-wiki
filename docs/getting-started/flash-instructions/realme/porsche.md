---
title: For Realme GT 2
sidebar_position: 2
---

## Prerequisites

:::info
The firmware for this device is included with the ROM.
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- LineageOS Recovery ([Download here](https://github.com/pjgowtham/android_device_realme_porsche/releases/download/lineage-21.0-20240107-UNOFFICIAL-porsche/recovery-lineage-21.0-20240107-UNOFFICIAL-porsche.zip))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/realme/porsche.md))
- Empty Super Image ([Download here](https://mirrorbits.lineageos.org/full/lemonadep/20240429/super_empty.img))

## Instructions

1. Boot into fastboot using `adb reboot fastboot`.
2. Flash the LineageOS Recovery using `fastboot flash --slot=all recovery recovery.img`.
3. Reboot into recovery using `adb reboot recovery` if you're on system and `fastboot reboot recovery` if you're on fastboot or bootloader.
:::note
You can also boot into fastboot and recovery using the [button combination](/docs/faq.md#button-combinations)
:::
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
4. Sideload nameless using `adb sideload Nameless-AOSP_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
5. Click back arrow, then click "Advanced" -> "Reboot to bootloader".
6. Format your device from fastboot using `fastboot -w` and flash the empty super partition to wipe super using `fastboot wipe-super super_empty.img`.
7. After the format is completed, reboot to system.