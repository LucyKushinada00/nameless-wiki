---
title: OnePlus 8
---

## Prerequisites

:::info
The firmware for this device is included in the ROM.
:::
- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Required Images: `boot.img`, `recovery.img`, `vbmeta.img`. ([Download Here](/docs/getting-started/downloads/oneplus/instantnoodle.md))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Nameless ROM Image ([Download Here](/docs/getting-started/downloads/oneplus/instantnoodle.md))

## Instructions when coming from Stock

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot your device into fastboot with `adb reboot fastboot`.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
3. Verify your device is detected by using `fastboot devices` and flash the downloaded images using:
```
fastboot flash boot boot.img
fastboot flash recovery recovery.img
fastboot flash vbmeta vbmeta.img
```
:::warning
If you're flashing a legacy version of the rom (Nameless 13) you'll also need to flash `vbemata_system` using `fastboot flash vbmeta_system vbmeta_sytem.img`.
:::
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

### Instructions when coming from a Custom ROM

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Boot into recovery with `adb reboot recovery`.
3. Sideload nameless using `adb sideload <filename>.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
4. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"
5. After the format is completed, click the back arrow and then click "Reboot to system".