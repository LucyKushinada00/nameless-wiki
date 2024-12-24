---
title: OnePlus 10 Pro
---

## Prerequisites

:::warning
This device is marked as End of Life and would no longer recieve updates.
:::

:::danger
This device needs OOS14 firmware for Nameless 14 builds, OOS13.1 for legacy builds
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Orangefox Recovery ([Download here](https://sourceforge.net/projects/oneplus-10-pro/files/orange/2024-2-21/OrangeFox-Unofficial-ferrarri.img/download))
- Nameless ROM Image ([Download Here](/docs/getting-started/downloads/legacy/wly.md))

## Instructions when coming from Stock/Custom ROM

:::warning
Make sure you're on the latest compatible firmware on both slots, otherwise [flash the firmware](/docs/faq.md#ab-partitions-explained) before continuing.
:::
1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot your device into fastboot with `adb reboot fastboot`.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
3. Verify your device is detected by using `fastboot devices` and flash the downloaded images using:
```
fastboot flash recovery recovery.img
```
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
4. Reboot your device into recovery mode, click "Install Update" -> "ADB Sideload".
5. Sideload nameless using `adb sideload <filename>.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
6. Once the flash is complete, go back to the main recovery menu and click "Factory Reset" -> "Format Data".
7. Reboot to system.