(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{368:function(e,t,a){"use strict";a.r(t);var r=a(22),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"led-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#led-hardware"}},[e._v("#")]),e._v(" LED Hardware")]),e._v(" "),a("p",[e._v("Hyperion supports a lot of different controllers and led chips. Also network communication is possible, therefore we also support Philips Hue, AtmoOrb and more.")]),e._v(" "),a("h2",{attrs:{id:"general-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-settings"}},[e._v("#")]),e._v(" General Settings")]),e._v(" "),a("p",[e._v("Applicable for all led hardware implementations \\")]),e._v(" "),a("ul",[a("li",[e._v("RGB byte order: If you want to check this value, use the wizard.")]),e._v(" "),a("li",[e._v("Refresh time: If no source is active and the led hardware component is enabled, this will update by the given interval time the led hardware with black color.")])]),e._v(" "),a("h2",{attrs:{id:"specific-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-settings"}},[e._v("#")]),e._v(" Specific Settings")]),e._v(" "),a("p",[e._v("Each LED hardware has specific settings which are explained here")]),e._v(" "),a("h3",{attrs:{id:"spi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spi"}},[e._v("#")]),e._v(" SPI")]),e._v(" "),a("p",[e._v("Are 4 wire leds which can be powered via SPI of a Raspberry Pi or an Arduino (which is USB connected to your computer/HTPC/Pi)")]),e._v(" "),a("h4",{attrs:{id:"apa102"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apa102"}},[e._v("#")]),e._v(" apa102")]),e._v(" "),a("p",[e._v("APA 102. These LEDs are known for a good color spectrum (converting a data signal to the wanted color).")]),e._v(" "),a("h4",{attrs:{id:"ws2801"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ws2801"}},[e._v("#")]),e._v(" ws2801")]),e._v(" "),a("p",[e._v("The color spectrum of these leds is bad.")]),e._v(" "),a("h4",{attrs:{id:"lpd6803"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lpd6803"}},[e._v("#")]),e._v(" lpd6803")]),e._v(" "),a("h4",{attrs:{id:"lpd8806"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lpd8806"}},[e._v("#")]),e._v(" lpd8806")]),e._v(" "),a("h4",{attrs:{id:"p9813"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#p9813"}},[e._v("#")]),e._v(" p9813")]),e._v(" "),a("h4",{attrs:{id:"sk6812spi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sk6812spi"}},[e._v("#")]),e._v(" sk6812spi")]),e._v(" "),a("p",[e._v("The SK6812 are "),a("strong",[e._v("3")]),e._v(" wire leds, you could also drive them via spi.")]),e._v(" "),a("h4",{attrs:{id:"sk6822spi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sk6822spi"}},[e._v("#")]),e._v(" sk6822spi")]),e._v(" "),a("p",[e._v("The SK6822 are "),a("strong",[e._v("3")]),e._v(" wire leds, you could also drive them via spi.")]),e._v(" "),a("h4",{attrs:{id:"sk9822"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sk9822"}},[e._v("#")]),e._v(" sk9822")]),e._v(" "),a("p",[e._v("The SK9822 are "),a("strong",[e._v("4")]),e._v(" wire leds compatible to APA 102 with addition of global brightness control.")]),e._v(" "),a("h4",{attrs:{id:"ws2812spi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ws2812spi"}},[e._v("#")]),e._v(" ws2812spi")]),e._v(" "),a("p",[e._v("The WS2812 are "),a("strong",[e._v("3")]),e._v(" wire leds, you could also drive them via spi.")]),e._v(" "),a("h3",{attrs:{id:"usb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb"}},[e._v("#")]),e._v(" USB")]),e._v(" "),a("p",[e._v("Plug and play. The following controllers are supported.")]),e._v(" "),a("h4",{attrs:{id:"adalight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adalight"}},[e._v("#")]),e._v(" adalight")]),e._v(" "),a("p",[e._v("Most used because it's cheap and easy! An Arduino powered by an adalight sketch. We provide a modified version of it. Checkout TUTORIAL")]),e._v(" "),a("h4",{attrs:{id:"atmo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atmo"}},[e._v("#")]),e._v(" atmo")]),e._v(" "),a("h4",{attrs:{id:"dmx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmx"}},[e._v("#")]),e._v(" dmx")]),e._v(" "),a("h4",{attrs:{id:"file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[e._v("#")]),e._v(" file")]),e._v(" "),a("h4",{attrs:{id:"hyperionusbasp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hyperionusbasp"}},[e._v("#")]),e._v(" hyperionusbasp")]),e._v(" "),a("h4",{attrs:{id:"lightpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightpack"}},[e._v("#")]),e._v(" lightpack")]),e._v(" "),a("h4",{attrs:{id:"multilightpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multilightpack"}},[e._v("#")]),e._v(" multilightpack")]),e._v(" "),a("h4",{attrs:{id:"paintpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paintpack"}},[e._v("#")]),e._v(" paintpack")]),e._v(" "),a("h4",{attrs:{id:"rawhid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rawhid"}},[e._v("#")]),e._v(" rawhid")]),e._v(" "),a("h4",{attrs:{id:"sedu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sedu"}},[e._v("#")]),e._v(" sedu")]),e._v(" "),a("h4",{attrs:{id:"tpm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tpm2"}},[e._v("#")]),e._v(" tpm2")]),e._v(" "),a("h3",{attrs:{id:"network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" Network")]),e._v(" "),a("p",[e._v("Hue bridges, nodeMCU, AtmoOrbs, "),a("a",{attrs:{href:"https://github.com/Aircoookie/WLED",target:"_blank",rel:"noopener noreferrer"}},[e._v("WLED"),a("OutboundLink")],1),e._v(" everything that is reachable over network.")]),e._v(" "),a("h4",{attrs:{id:"philipshue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#philipshue"}},[e._v("#")]),e._v(" philipshue")]),e._v(" "),a("p",[e._v("The well known "),a("a",{attrs:{href:"https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=philips+hue+starter+set&rh=i%3Aaps%2Ck%3Aphilips+hue+starter+set&tag=hyperionpro05-20",target:"_blank",rel:"noopener noreferrer"}},[e._v("Philips Hue Bridge + Bulbs"),a("OutboundLink")],1),e._v(" is supported. How to configure them with Hyperion? Checkout: Web configuration")]),e._v(" "),a("h4",{attrs:{id:"entertainment-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entertainment-api"}},[e._v("#")]),e._v(" Entertainment API")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Photosensitive seizure warning")]),e._v(" "),a("p",[e._v("Certain individuals may experience discomfort when exposed to quick flashes/patterns of light.\nPlease refrain from using entertainment mode immediately if you feel any discomfort or have any known health conditions. Please consult a physician under those circumstances. Make sure your entertainment room is well-lit.")]),e._v(" "),a("p",[e._v("Hyperion cannot be held liable for any foreseeable, or unforeseeable, negative or harmful impact.")])]),e._v(" "),a("h5",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("Before you start, the Entertainment API requires at least one entertainment group/area with minimum one assigned lamp! Checkout: "),a("a",{attrs:{href:"#entertainment-groups--areas"}},[e._v("Entertainment groups / areas")])]),e._v(" "),a("li",[e._v("A normal Hue group, does NOT work with the Hue Entertainment API!")]),e._v(" "),a("li",[e._v('Check the "Use Hue Entertainment API" option and use the Philips Hue Entertainment wizard at the web configuration for configuration (available at led hardware section)!')]),e._v(" "),a("li",[e._v("The Entertainment API requires also a username and a suitable clientkey. Checkout: "),a("a",{attrs:{href:"#philips-hue-entertainment-wizard"}},[e._v("Philips Hue Entertainment wizard")])])]),e._v(" "),a("h5",{attrs:{id:"philips-hue-entertainment-wizard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#philips-hue-entertainment-wizard"}},[e._v("#")]),e._v(" Philips Hue Entertainment wizard")]),e._v(" "),a("ul",[a("li",[e._v('In the wizard, your Hue Bridge is automatically discovered via the Philips Hue Cloud when it is registered. If not, try entering the bridge IP address and click the "retry" icon / button next to the IP entry field.')]),e._v(" "),a("li",[e._v("If only the username is known or you start from scratch, create a new user with the Philips Hue Entertainment wizard and a clientkey will automatically generated.")]),e._v(" "),a("li",[e._v("If no Entertainment group / area was found on the bridge you are using, the wizard switches back to the classic version and deactivates the use of the Hue Entertainment API!")]),e._v(" "),a("li",[e._v("Username, clientkey and Entertainment group / area ready? Select your Entertainment group / area, you would like to use and fine-tune your preselected screen positions for each lamp.")]),e._v(" "),a("li",[e._v("Don't forget to save your changes! 😉")])]),e._v(" "),a("h5",{attrs:{id:"bridge-requirements-limits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bridge-requirements-limits"}},[e._v("#")]),e._v(" Bridge requirements / limits")]),e._v(" "),a("ul",[a("li",[e._v("To use the Philips Hue Entertainment API, the bridge must use at least API version 1.22!")]),e._v(" "),a("li",[e._v("Only one Entertainment group / area can be active at one time on a single Hue Bridge!")])]),e._v(" "),a("h5",{attrs:{id:"multiple-and-or-none-original-hue-bridges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-and-or-none-original-hue-bridges"}},[e._v("#")]),e._v(" Multiple and / or none original Hue bridges")]),e._v(" "),a("ul",[a("li",[e._v("Automatic detection will only find the first available bridge.")]),e._v(" "),a("li",[e._v('If your bridge wasn\'t found or was found, but not the one you want to use, manually enter the desired bridge IP address and click the "retry" icon / button next to the IP entry field.')])]),e._v(" "),a("h5",{attrs:{id:"entertainment-groups-areas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entertainment-groups-areas"}},[e._v("#")]),e._v(" Entertainment groups / areas")]),e._v(" "),a("ul",[a("li",[e._v("Entertainment groups / areas can be created using the original Philips Hue app.")]),e._v(" "),a("li",[e._v("Set also the right z-axis (Ground height, TV height and Ceiling height) for each lamp within the configuration of the Entertainment group / area. Tapping each lamp changes the height and will be recognized it in the Philips Hue Entertainment wizard to also preselect the correct screen position.")]),e._v(" "),a("li",[e._v("You can connect up to 10 Philips Hue or Friends of Hue color-capable lights per Entertainment group / area.")]),e._v(" "),a("li",[e._v("When a Entertainment group / area is used with the Entertainment API, you can't control any of the lamps in the Entertainment group / area, until the Entertainment API stops!")])]),e._v(" "),a("h4",{attrs:{id:"advanced-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-settings"}},[e._v("#")]),e._v(" Advanced Settings")]),e._v(" "),a("h5",{attrs:{id:"signal-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signal-detection"}},[e._v("#")]),e._v(" Signal detection")]),e._v(" "),a("ul",[a("li",[e._v("The Entertainment API is a permanent stream that continuously sends color information to the bridge. That's why the signal detection came into play.")]),e._v(" "),a("li",[e._v("With the "),a("code",[e._v("Signal detection timeout on black")]),e._v(" option, you can control how long all lamps are set to black, before the Entertainment API stops and the previous lamp state will be recovered.")]),e._v(" "),a("li",[e._v("Set the ms value higher, so longer dark scenes in movies will not stop the Entertainment API.")]),e._v(" "),a("li",[e._v("The Entertainment API automatically restarts when color information other than black is available to send.")]),e._v(" "),a("li",[e._v("Some grabbers do not provide real black, but rather dark gray, so black = 0 never occurs. With the option "),a("code",[e._v("Signal detection brightness minimum")]),e._v(" you can set the minimum brightness which is considered black. The range can be set from 0 = 0% to 1 = 100%, e.g. 0,005 = 0.5%. If 0 doesn't' work for your setup, increase this value in 0,005 steps. It's like the thresholds for USB Capture.")])]),e._v(" "),a("h5",{attrs:{id:"brightness-settings-may-be-removed-in-future-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brightness-settings-may-be-removed-in-future-releases"}},[e._v("#")]),e._v(" Brightness "),a("em",[e._v("Settings may be removed in future releases")])]),e._v(" "),a("ul",[a("li",[e._v("Set / leave "),a("code",[e._v("brightness factor")]),e._v(" back to 1 (default) - classic low brightness bug is fixed")]),e._v(" "),a("li",[e._v("Set / leave "),a("code",[e._v("brightness minimum")]),e._v(" to 0 (default) - you can set a minimum brightness, so the lamps will never be off")]),e._v(" "),a("li",[e._v("Set / leave "),a("code",[e._v("brightness maximum")]),e._v(" to 1 (default) - you can set a maximum brightness, if you don't want the whole room to light up in bright scenes")]),e._v(" "),a("li",[e._v("Value range for brightness minimum / maximum are: 0 = 0% to 1 = 100%, E.g. 0,05 = 5% / 0,5 = 50%")]),e._v(" "),a("li",[e._v("The brightness factor is a multiplier for the input brightness, means E.g. 50% input brightness * brightness factor (e.g. 1,5) = new 75% brightness.")]),e._v(" "),a("li",[a("strong",[e._v("Be warned")]),e._v(":\nIf you change the brightness factor / minimum / maximum to a value other than the default value, the color rendering will also change!!!\nE.g. Dark / Black will appear as a deep dark blue, if you raise the minimum brightness, because the deepest color inside the hue light system is a deep blue, because black is not a color, it's only off.\n"),a("strong",[e._v("AND")]),e._v(" you can miss the entire Entertainment API experience 😉")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Fast uncontrolled colors / flickering")]),e._v(" "),a("ul",[a("li",[e._v("The color information for each lamp, depends on the input signal from your grabber source, the defined screen position to use for the lamp (like any other led configuration) and the used capture framerate!")]),e._v(" "),a("li",[e._v("Input signals with noise and other image disturbances can cause this effect of rapidly changing colors / flickering. For more information on how to reduce this problem, see the next tip:")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Activate smoothing in image processing!")]),e._v(" "),a("p",[e._v("This allows the extremely fast color / flicker to be controlled very well.\nThese values ​​work well, but decide for yourself:\nTime: 80 - 120 ms\nUpdate frequency: 35 - 40 Hz - higher values leads to faster color change / flickering again\nUpdate delay: 0 ms\nContinuous output: no - does not have to, since the last color values ​​are stored in the respective lamp")])]),e._v(" "),a("h5",{attrs:{id:"configuration-tips-tricks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-tips-tricks"}},[e._v("#")]),e._v(" Configuration Tips & Tricks")]),e._v(" "),a("ul",[a("li",[e._v("Color calibration is not required, you can keep the default values.")]),e._v(" "),a("li",[e._v("To enable/disable the active Entertainment group / area from Hyperion, disable Hyperion or just the led hardware component. The previous lamp state will be recovered - other solutions may come in future releases - Hint: "),a("a",{attrs:{href:"#signal-detection"}},[e._v("Signal detection")])])]),e._v(" "),a("h4",{attrs:{id:"classic-philips-hue-usage-without-the-entertainment-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classic-philips-hue-usage-without-the-entertainment-api"}},[e._v("#")]),e._v(" Classic Philips Hue usage without the Entertainment API")]),e._v(" "),a("h5",{attrs:{id:"configuration-tips-tricks-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-tips-tricks-2"}},[e._v("#")]),e._v(" Configuration Tips & Tricks")]),e._v(" "),a("ul",[a("li",[e._v("Use the Philips Hue wizard at the web configuration for configuration (available at led hardware section)!")]),e._v(" "),a("li",[e._v("Color calibration is not required, you can keep the default values.")]),e._v(" "),a("li",[e._v("If the brightness is to low for you and Hyperion is already at 100% you can higher the brightness factor at the web configuration -> LED hardware")]),e._v(" "),a("li",[e._v("Brightness compensation influences the brightness across different color (Adjust at the color section)")]),e._v(" "),a("li",[e._v("To enable/disable the bridge control from Hyperion, disable Hyperion or just the led hardware component. The previous lamp state will be recovered")])]),e._v(" "),a("h4",{attrs:{id:"wled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wled"}},[e._v("#")]),e._v(" WLED")]),e._v(" "),a("p",[e._v('WLED is connected to Hyperion by selecting the "Controller type" als WLED and entering the IP-Adress of your WLED instance in the Hyperion UI.'),a("br"),e._v('\nHyperion uses the brightness setting set in WLED. E.g. if you set the brightness in WLED to 10% the LEDs will light up to a maximum of 10%. If you would like Hyperion to override the brightness setting of WLED and use the maximum brightness you can do so by going to the WLED configuration -> Sync. Settings and enabling "Force max brightness".')]),e._v(" "),a("h4",{attrs:{id:"atmoorb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atmoorb"}},[e._v("#")]),e._v(" atmoorb")]),e._v(" "),a("h4",{attrs:{id:"tpm2net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tpm2net"}},[e._v("#")]),e._v(" tpm2net")]),e._v(" "),a("h4",{attrs:{id:"udpe131"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udpe131"}},[e._v("#")]),e._v(" udpe131")]),e._v(" "),a("h4",{attrs:{id:"udph801"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udph801"}},[e._v("#")]),e._v(" udph801")]),e._v(" "),a("h4",{attrs:{id:"udpraw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udpraw"}},[e._v("#")]),e._v(" udpraw")]),e._v(" "),a("h4",{attrs:{id:"tinkerforge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tinkerforge"}},[e._v("#")]),e._v(" tinkerforge")]),e._v(" "),a("h4",{attrs:{id:"fadecandy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fadecandy"}},[e._v("#")]),e._v(" fadecandy")]),e._v(" "),a("h3",{attrs:{id:"raspberry-pi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi"}},[e._v("#")]),e._v(" Raspberry Pi")]),e._v(" "),a("p",[e._v("Just for the Raspberry Pi!")]),e._v(" "),a("h4",{attrs:{id:"ws281x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ws281x"}},[e._v("#")]),e._v(" ws281x")]),e._v(" "),a("p",[e._v("Driving all kinds of WS281X stripes. Due to mixed feedback we recommend adalight or Raspberry Pi SPI.")]),e._v(" "),a("h4",{attrs:{id:"piblaster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#piblaster"}},[e._v("#")]),e._v(" piblaster")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sarfata/pi-blaster",target:"_blank",rel:"noopener noreferrer"}},[e._v("PiBlaster on Github"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);