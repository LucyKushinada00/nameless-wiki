---
title: OnePlus 13
---

## Prerequisites

:::info
The firmware for this device is included with the ROM.
:::

- Latest [Platform Tools](/docs/faq.md#links)
- Developer settings and USB debugging enabled ([Instructions](/docs/faq.md#enabling-developer-options))
- Required Images: boot.img, vendor_boot.img, init_boot.img, recovery.img ([Instructions](/docs/getting-started/downloads/oneplus/dodge.md))
- Unlocked bootloader ([Instructions](/docs/faq.md#how-to-unlock-bootloader))
- Nameless CLO ROM Image ([Download here](/docs/getting-started/downloads/oneplus/dodge.md))

## Instructions when coming from Stock

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Reboot your device into fastboot with `adb reboot bootloader`.
:::note
You can also boot into fastboot using the [button combination](/docs/faq.md#button-combinations)
:::
3. Verify your device is detected by using `fastboot devices` and flash the downloaded images using:
```
fastboot flash boot boot.img
fastboot flash vendor_boot vendor_boot.img
fastboot flash init_boot init_boot.img
fastboot flash recovery recovery.img
```
:::info
If your device isn't detected when in fastboot download the [Google OEM Drivers](/docs/faq.md#links) and follow the instructions [here](/docs/faq.md#installing-google-usb-drivers).
:::
4. Once the flash is complete, go back to the main recovery menu and click "Factory Reset" -> "Format Data".
5. Reboot your device into recovery mode, click "Install Update" -> "ADB Sideload".
6. Sideload nameless using `adb sideload <filename>.zip`.
:::info
1. Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
2. If you are unable to wipe your super partition or are getting the `kDownloadError`, reboot to fastbootd and wipe the super partition using `fastboot wipe-super super_empty.img`.
If you are having issues flashing any of the images from CMD, you can also use fastboot enhance to flash the partitions. [Download here](/faq#links).
:::
7. Reboot to system.

:::danger
**For Chinese Variant Users (In case you aren't on the latest version of COS before flashing Nameless):**
If your SIM isn't detected after flashing the ROM, you need to flash the chinese variant (COS) images in fastbootd mode. Follow the instructions below for help with that:

1. Boot into fastbootd using `adb reboot fastbootd`.
2. Extract `oplusstanvbk.img` and `modem.img` from the latest COS firmware zip* ([Instructions](/faq#dumping-partitions-from-the-rom-zip))
3. Flash the images using:
```
fastboot flash oplusstanvbk oplusstanvbk.img
fastboot flash modem modem.img
```
\* **These images were not included due to the Chinese variant device facing network issues. These images would need to be updated when the ROM uses the latest firmware**
:::

### Instructions when coming from a Custom ROM

1. Open CMD and `cd` into the directory with the files. **(DO NOT USE POWERSHELL!)**
2. Boot into recovery with `adb reboot recovery`.
3. Sideload nameless using `adb sideload <filename>.zip`.
:::info
Once you see a back arrow at the top left corner of your recovery the sideload is completed. Progress on your pc will stop at around 47%. This is normal behaviour.
:::
4. Click back arrow, then click "Factory reset" -> "Format data/factory reset" -> "Format data"
5. After the format is completed, click the back arrow and then click "Reboot to system".