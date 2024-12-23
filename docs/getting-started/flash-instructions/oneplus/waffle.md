---
title: OnePlus 12
sidebar_position: 10
---

## Prerequisites

:::info
The firmware for this device is included with the ROM.
:::

- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Required Images: boot.img, vendor_boot.img, init_boot.img, recovery.img ([Instructions](/docs/getting-started/downloads/oneplus/waffle.md))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/oneplus/waffle.md))

## Instructions

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot into fastboot using `adb reboot fastboot`.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
3. Verify that the device is in fastboot mode using `fastboot devices` on CMD and flash the downloaded images using the following commands:
```
fastboot flash boot boot.img
fastboot flash vendor_boot vendor_boot.img
fastboot flash init_boot init_boot.img
fastboot flash recovery recovery.img
```
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
4. Reboot to recovery using `fastboot reboot recovery` and perform a factory reset (Wipe data).
5. Reboot to fastbood using `fastboot reboot fastboot` and wipe the super partition using `fastboot wipe-super super_empty.img`.
6. Reboot to recovery using `fastboot reboot recovery`, then click "Install update" -> "ADB Sideload".
7. Sideload nameless using `adb sideload Nameless-CLO_xxx.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
8. Finally, click the back arrow and then click "Reboot to system".