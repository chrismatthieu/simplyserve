# Building a Video Walkie Talkie!

## Blink LED

1. Install Hardware Extention for PageNodes - https://chrome.google.com/webstore/detail/hardware-extension-for-pa/knmappkjdfbfdomfnbfhchnaamokjdpj?utm_source=chrome-ntp-launcher

2. Wire LED on breadboard and connect to Arduino ![](http://image.slidesharecdn.com/trevormcdonald-monitoringthephysicalworldwithnagiosandarduino-141022121006-conversion-gate02/95/nagios-conference-2014-trevor-mcdonald-monitoring-the-physical-world-with-nagios-and-arduino-10-638.jpg?cb=1413980127)

3. Plug Arduino into Chromebook

4. Open web browser to https://pagenodes.com

5. Add Johnny5 node (under Functions) to page and double click on node.

6. Configure board:
  - Nodebot = Arduino/Firmata
  - Connection = Serial port
  - Port = /dev/tty.usbmodem...
  - Name = Arduino 101

7. Copy and paste this code into onReady - https://gist.github.com/chrismatthieu/c66397a5ea8473b4effbe41284057c13

8. Click Deploy (top right). Congratulations!!!  Your LED should start blinking!

## Add Push-To-Talk Button

1. Wire button on breadboard and connect to Arduino
![](https://github.com/rwaldron/johnny-five/raw/master/docs/breadboard/button.png)

2. Double click on Johnny5 node again and copy/paste this code into onReady replacing your previous code - https://gist.github.com/chrismatthieu/c0b3943039574f0030d1525e787964ee

3. Add a Debug node (under Output) to page and connect it to Johnny5 and double click on Debug node.

4. Set output to message property msg.payload to debug tab.

5. Click Deploy (top right). Congratulations!!!  Your LED should turn on when button is pressed!

## Add Video When Button is Pushed

1. Delete Debug node.

2. Add a Switch node (under Functions) to page and connect it to Johnny5. Double click on Switch node.  Add rule that shows == on

3. Add Camera node (under Functions) and connect it to Switch node.

4. Add a Debug node (under Output) to page and connect it to Camera node and double click on Debug node.

5. Set output to message property msg.payload.image to debug tab.

6. Click Deploy (top right). Congratulations!!!  Your LED should turn on when button is pressed and video snapshots should appear in your Debug tab on the right side of your page!

## Create Video Chat Room

1. Delete Debug node.

2. Add Meshblu node (under Output) and connect it to camera node and double click Meshblu node.

3. Edit Meshblu node and add the following data:

  - UUID = aadb700c-874a-4655-be96-b1fe8400473d
  - Token = d00b2d7aac13eec581a90d2d17127779ac166fcf
  - click the checkbox on broadcast

4. Below the flow, add Meshblu node (under Input) and double click Meshblu node. Add broadcast from aadb700c-874a-4655-be96-b1fe8400473d and click OK.

5. Add a Debug node (under Output) to page and connect it to new Meshblu input node and double click on Debug node.

6. Set output to message property msg.payload.image to debug tab.
