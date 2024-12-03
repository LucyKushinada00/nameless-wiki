---
title: OnePlus 9RT
sidebar_position: 7
---

## Prerequisites

:::info
The firmware for this device is included with the ROM.
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- LOS boot image ([Download here](https://drive.google.com/file/d/18oL6m35RnyXaZKjh34muO_P3_xkK0BtB/view?usp=sharing))
- Nameless AOSP ROM Image ([Download here](/docs/getting-started/downloads/oneplus/martini.md))

## Instructions

1. Boot into fastboot using `adb reboot fastboot`.
2. Flash the LOS boot image with `fastboot flash boot boot-martini.img`.
:::warning
    If you're coming from stock (OOS/COS) you would also need to flash [dtbo.img](https://drive.google.com/file/d/1IMWHyBNobkJ31BKnOv2eRVRGRUlM9kph/view) and [vendor_boot.img](https://drive.google.com/file/d/1QScgKA9WQTMIBxYQXJFEnOuFNDXzK4Hg/view) using `fastboot flash dtbo dtbo.img` and `fastboot flash vendor_boot vendor_boot.img`.
:::
3. Reboot into recovery using `fastboot reboot recovery`.
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