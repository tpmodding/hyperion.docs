# WLED

WLED is connected to Hyperion by selecting the "Controller type" as WLED and entering the Hostname/IP-Address of your WLED instance in the Hyperion UI.\
Hyperion uses the brightness setting set in WLED. E.g. if you set the brightness in WLED to 10% the LEDs will light up to a maximum of 10%. If you would like Hyperion to override the brightness setting of WLED and use the maximum brightness you can do so by going to the WLED configuration -> Sync. Settings and enabling "Force max brightness".

::: warning Note:
The maximum number of LEDs supported is 490. (WLED 0.8.0 and lower: 341 LEDs)\
For more details see [WLED Wiki](https://github.com/Aircoookie/WLED/wiki/UDP-Realtime-Control#hyperion)

::: details Rationale by WLED-Developer Aircoookie:
<em>"Unfortunately the 490 LED is a hard limit. The reason is that the maximum amount of data that can be transmitted via a UDP frame at once is 1472 bytes (and we need 3 bytes data per LED). You could try to increase UDP_IN_MAXSIZE in wled07_notify.ino, maybe the 8266 (or at least ESP32) can handle larger UDP packets by reassembling the frames."</em>
:::
