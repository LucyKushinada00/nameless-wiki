---
title: OnePlus 10 Pro
sidebar_position: 8
---

## Prerequisites
:::danger
For Nameless 14 builds on this device, flash the latest firmware from OOS 14.
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Orangefox Recovery ([Download here](https://sourceforge.net/projects/oneplus-10-pro/files/orange/2024-2-21/OrangeFox-Unofficial-ferrarri.img/download))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/oneplus/wly.md))

## Instructions

1. Boot into fastboot using `adb reboot fastboot`.
2. Flash the Orangefox Recovery using `fastboot flash recovery recovery.img`.
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
5. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"
6. After the format is completed, click the back arrow and then click "Reboot to system".