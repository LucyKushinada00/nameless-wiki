---
title: Realme GT Master
---

## Prerequisites

:::warning
This device is marked as End of Life and would no longer recieve updates.
:::

:::info
The firmware for this device is included with the ROM.
:::
- Latest [Platform Tools](/docs/faq.md/#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md/#enabling-developer-options))
- Unlocked bootloader ([Instructions](/docs/faq.md/#how-to-unlock-bootloader))
- LineageOS Recovery ([Download here](https://github.com/pjgowtham/android_device_realme_lunaa/releases/download/lineage-21.0-20240101-UNOFFICIAL-lunaa/recovery-lineage-21.0-20240101-UNOFFICIAL-lunaa.zip))
- Nameless ROM Image ([Download Here](/docs/getting-started/downloads/legacy/lunaa.md))

## Instructions when coming from Stock

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Flash the LineageOS Recovery using `fastboot flash recovery recovery.img`.
3. Reboot your device into recovery mode, click "Install Update" -> "ADB Sideload".
:::note
You can also boot into fastboot and recovery using the [button combination](/docs/faq.md#button-combinations)
:::
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
4. Sideload nameless using `adb sideload <filename>.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
5. Once the flash is complete, go back to the main recovery menu and click "Factory Reset" -> "Format Data".
6. Reboot to system.

### Instructions when coming from a Custom ROM

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Boot into recovery with `adb reboot recovery`.
3. Sideload nameless using `adb sideload <filename>.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
4. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"
5. After the format is completed, click the back arrow and then click "Reboot to system".