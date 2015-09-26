[![Build Status](https://travis-ci.org/OADA/valleyix-formats.svg?branch=master)](https://travis-ci.org/OADA/valleyix-formats)
[![Coverage Status](https://coveralls.io/repos/OADA/valleyix-formats/badge.svg?branch=master)](https://coveralls.io/r/OADA/valleyix-formats?branch=master)
[![Dependency Status](https://david-dm.org/oada/valleyix-formats.svg)](https://david-dm.org/oada/valleyix-formats)
[![License](http://img.shields.io/:license-Apache%202.0-green.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

# valleyix-formats #

Schema and examples package of Valleyix's formats for
[oada-formats][oada-formats].

## Installation ##
```shell
npm install valleyix-formats
```

## Usage ##
```javascript
var Formats = require('oada-formats');

var formats = new Formats();
formats.use(require('valleyix-formats'));
```

# Valleyix Formats

- [application/vnd.valleyix.grower.1+json](#user-content-applicationvndvalleyixgrower1json)
  * [Schema](#schema)
  * [Example](#example)
- [application/vnd.valleyix.machine.1+json](#user-content-applicationvndvalleyixmachine1json)
  * [Schema](#schema)
  * [Example](#example)
- [application/vnd.valleyix.machine.as-applied.1+json](#user-content-applicationvndvalleyixmachineas-applied1json)
  * [Schema](#schema)
  * [Example](#example)
- [application/vnd.valleyix.machine.configuration.1+json](#user-content-applicationvndvalleyixmachineconfiguration1json)
  * [Schema](#schema)
  * [Example](#example)
- [application/vnd.valleyix.machine.status.1+json](#user-content-applicationvndvalleyixmachinestatus1json)
  * [Schema](#schema)
  * [Example](#example)
- [application/vnd.valleyix.machine.VRIZones.1+json](#user-content-applicationvndvalleyixmachinevrizones1json)
  * [Schema](#schema)
  * [Example](#example)
- [application/vnd.valleyix.machine.work-order.1+json](#user-content-applicationvndvalleyixmachinework-order1json)
  * [Schema](#schema)
  * [Example](#example)

# application/vnd.valleyix.grower.1+json

## Schema
```json
{
  "id": "valleyix-formats://application/vnd.valleyix.grower.1+json",
  "description": "application/vnd.valleyix.grower.1+json",
  "type": "object",
  "addtionalProperties": true,
  "properties": {
    "UserId": {
      "type": "string",
      "minLength": 1
    },
    "UserName": {
      "type": "string",
      "minLength": 1
    },
    "FirstName": {
      "type": "string",
      "minLength": 1
    },
    "LastName": {
      "type": "string",
      "minLength": 1
    },
    "EmailAddress": {
      "type": "string",
      "minLength": 1
    },
    "PrimaryPhoneNumber": {
      "type": "string",
      "minLength": 1
    },
    "SecondaryPhoneNumber": {},
    "bookmarks": {
      "$ref": "oada-formats://application/vnd.oada.link.1+json#/definitions/versioned"
    }
  },
  "required": [
    "UserId",
    "UserName",
    "FirstName",
    "LastName",
    "EmailAddress",
    "PrimaryPhoneNumber",
    "bookmarks"
  ]
}
```

## Example
```json
{
  "UserId": "64E1175E-8744-4C27-856E-00F6D600115D",
  "UserName": "auser",
  "FirstName": "John",
  "LastName": "Smith",
  "EmailAddress": "js@example.com",
  "PrimaryPhoneNumber": "1234567890",
  "SecondaryPhoneNumber": null,
  "bookmarks": {
    "_id": "abc123",
    "_rev": "6-0qjd2o2fo22"
  }
}
```

# application/vnd.valleyix.machine.1+json

## Schema
```json
{
  "id": "valleyix-formats://application/vnd.valleyix.machine.1+json",
  "description": "application/vnd.valleyix.machine.1+json",
  "type": "object",
  "addtionalProperties": true,
  "properties": {
    "configuration": {
      "$ref": "oada-formats://application/vnd.oada.link.1+json#/definitions/versioned"
    },
    "status": {
      "$ref": "oada-formats://application/vnd.oada.link.1+json#/definitions/versioned"
    },
    "applied": {
      "$ref": "oada-formats://application/vnd.oada.link.1+json#/definitions/versioned"
    },
    "vriZones": {
      "$ref": "oada-formats://application/vnd.oada.link.1+json#/definitions/versioned"
    },
    "vriPrescriptions": {
      "$ref": "oada-formats://application/vnd.oada.link.1+json#/definitions/versioned"
    },
    "workOrders": {
      "$ref": "oada-formats://application/vnd.oada.link.1+json#/definitions/versioned"
    }
  },
  "required": [
    "configuration",
    "status",
    "applied",
    "vriZones",
    "vriPrescriptions",
    "workOrders"
  ]
}
```

## Example
```json
{
  "configuration": {
    "_id": "qwe123",
    "_rev": "1-kdjf02"
  },
  "status": {
    "_id": "asd456",
    "_rev": "4-k2g234gw02"
  },
  "applied": {
    "_id": "zxc789",
    "_rev": "2-svcwevws2"
  },
  "vriZones": {
    "_id": "rty012",
    "_rev": "1-kwg2g02"
  },
  "vriPrescriptions": {
    "_id": "fgh345",
    "_rev": "7-swedrg24g02"
  },
  "workOrders": {
    "_id": "vbn678",
    "_rev": "13-534nberv2302"
  }
}
```

# application/vnd.valleyix.machine.as-applied.1+json

## Schema
```json
{
  "id": "valleyix-formats://application/vnd.valleyix.machine.as-applied.1+json",
  "description": "application/vnd.valleyix.machine.as-applied.1+json",
  "type": "object",
  "addtionalProperties": true,
  "properties": {
    "as-applied": {
      "type": "array",
      "uniqueItems": true,
      "minItems": 1,
      "items": {
        "properties": {
          "ApplicationDepth": {
            "type": "string"
          },
          "Aux1In": {
            "type": "string"
          },
          "Aux1Label": {
            "type": "string"
          },
          "Aux1LabelType": {
            "type": "string"
          },
          "Aux1Out": {
            "type": "string"
          },
          "Aux2In": {
            "type": "string"
          },
          "Aux2Label": {
            "type": "string"
          },
          "Aux2LabelType": {
            "type": "string"
          },
          "Aux2Out": {
            "type": "string"
          },
          "Command": {
            "type": "string"
          },
          "CreatedDate": {
            "type": "string"
          },
          "DegreesTravelled": {
            "type": "string"
          },
          "DeviceId": {
            "type": "string"
          },
          "ElapsedTime": {
            "type": "number"
          },
          "EndDegreeRange": {
            "type": "string"
          },
          "FlowMeter1": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "FlowMeter1LabelName": {
            "type": "string"
          },
          "FlowMeter1Multiplier": {
            "type": "string"
          },
          "FlowMeter1Used": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "type": "null"
              }
            ]
          },
          "FlowMeter2": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "FlowMeter2LabelName": {
            "type": "string"
          },
          "FlowMeter2Multiplier": {
            "type": "string"
          },
          "FlowMeter2Used": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "type": "null"
              }
            ]
          },
          "FlowRateMeter1": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "FlowRateMeter2": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "HourMeter": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "HoursWet": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "PercentTimer": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "PivotCurrentPosition": {
            "type": "string"
          },
          "PivotDirection": {
            "type": "string"
          },
          "PivotRunningStatus": {
            "type": "string"
          },
          "PressureBeginValue": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "PressureEndValue": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "ProgramRunningStatus": {
            "type": "string"
          },
          "RtuId": {
            "type": "string"
          },
          "StartDegreeRange": {
            "type": "string"
          },
          "TotalFlowMeter": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          },
          "TransactionId": {
            "type": "string"
          },
          "WaterEventId": {
            "type": "string"
          },
          "WaterMode": {
            "type": "string"
          },
          "WetHourMeter": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "ApplicationDepth",
          "Aux1In",
          "Aux1Label",
          "Aux1LabelType",
          "Aux1Out",
          "Aux2In",
          "Aux2Label",
          "Aux2LabelType",
          "Aux2Out",
          "Command",
          "CreatedDate",
          "DegreesTravelled",
          "DeviceId",
          "ElapsedTime",
          "EndDegreeRange",
          "PivotCurrentPosition",
          "PivotDirection",
          "PivotRunningStatus",
          "ProgramRunningStatus",
          "RtuId",
          "StartDegreeRange",
          "TransactionId",
          "WaterEventId",
          "WaterMode"
        ]
      }
    }
  },
  "required": [
    "as-applied"
  ]
}
```

## Example
```json
{
  "as-applied": [
    {
      "ApplicationDepth": "1",
      "Aux1In": "Off",
      "Aux1Label": "",
      "Aux1LabelType": "",
      "Aux1Out": "On",
      "Aux2In": "Off",
      "Aux2Label": "",
      "Aux2LabelType": "",
      "Aux2Out": "Off",
      "Command": "S1",
      "CreatedDate": "1398405988",
      "DegreesTravelled": "60",
      "DeviceId": "9f200960-ac7a-44e7-8d44-3db2a2e547aa",
      "ElapsedTime": 0,
      "EndDegreeRange": "120",
      "FlowMeter1": null,
      "FlowMeter1Used": null,
      "FlowMeter2": null,
      "FlowMeter2Used": null,
      "FlowRateMeter1": null,
      "FlowRateMeter2": null,
      "HourMeter": null,
      "HoursWet": null,
      "PercentTimer": null,
      "PivotCurrentPosition": "120",
      "PivotDirection": "Reverse",
      "PivotRunningStatus": "Running",
      "PressureBeginValue": null,
      "PressureEndValue": null,
      "ProgramRunningStatus": "On",
      "RtuId": "011",
      "StartDegreeRange": "180",
      "TotalFlowMeter": null,
      "TransactionId": "b51b4731-c788-41c1-8246-e135a636d352",
      "WaterEventId": "cd30570e-e8f8-4756-b812-d52ad23400db",
      "WaterMode": "Wet",
      "WetHourMeter": null,
      "isDegreesReversed": false
    },
    {
      "ApplicationDepth": "1",
      "Aux1In": "Off",
      "Aux1Label": "",
      "Aux1LabelType": "Chemicals",
      "Aux1Out": "On",
      "Aux2In": "Off",
      "Aux2Label": "",
      "Aux2LabelType": "Fertilizer",
      "Aux2Out": "On",
      "Command": "S1",
      "CreatedDate": "1405836388",
      "DegreesTravelled": "180",
      "DeviceId": "1419bec7-e8f0-4cc4-8f83-228d52f6d470",
      "ElapsedTime": 0,
      "EndDegreeRange": "0",
      "FlowMeter1": null,
      "FlowMeter1LabelName": "",
      "FlowMeter1Multiplier": "",
      "FlowMeter1Used": null,
      "FlowMeter2": null,
      "FlowMeter2LabelName": "",
      "FlowMeter2Multiplier": "",
      "FlowMeter2Used": null,
      "FlowRateMeter1": null,
      "FlowRateMeter2": null,
      "HourMeter": null,
      "HoursWet": null,
      "PercentTimer": null,
      "PivotCurrentPosition": "0",
      "PivotDirection": "Forward",
      "PivotRunningStatus": "Running",
      "PressureBeginValue": null,
      "PressureEndValue": null,
      "ProgramRunningStatus": "On",
      "RtuId": "102",
      "StartDegreeRange": "180",
      "TotalFlowMeter": null,
      "TransactionId": "b51b4731-c788-41c1-8246-e135a636d352",
      "WaterEventId": "2365167d-8ba2-4aab-bbc3-4a02e80cb848",
      "WaterMode": "Wet",
      "WetHourMeter": null
    }
  ]
}
```

# application/vnd.valleyix.machine.configuration.1+json

## Schema
```json
{
  "id": "valleyix-formats://application/vnd.valleyix.machine.configuration.1+json",
  "description": "application/vnd.valleyix.machine.configuration.1+json",
  "type": "object",
  "addtionalProperties": true,
  "properties": {
    "DeviceId": {
      "type": "string",
      "minLength": 1
    },
    "DeviceName": {
      "type": "string",
      "minLength": 1
    },
    "DeviceTypeId": {
      "type": "string",
      "minLength": 1
    },
    "DeviceTypeName": {
      "type": "string",
      "minLength": 1
    },
    "EndGunList": {
      "type": "array",
      "uniqueItems": true,
      "minItems": 1,
      "items": {
        "properties": {
          "EndGunID": {
            "type": "string",
            "minLength": 1
          },
          "EndGunType": {
            "type": "string",
            "minLength": 1
          }
        }
      },
      "required": [
        "EndGunID",
        "EndGunType"
      ]
    },
    "FarmId": {
      "type": "string",
      "minLength": 1
    },
    "FirmwareVersion": {
      "type": "string"
    },
    "ForwardAngle": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ]
    },
    "IsConfigured": {
      "type": "boolean"
    },
    "Latitude": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ]
    },
    "Longitude": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ]
    },
    "LrduDistance": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ]
    },
    "MachineLength": {
      "type": "number"
    },
    "PanelId": {
      "type": "string",
      "minLength": 1
    },
    "PanelTypeName": {
      "type": "string",
      "minLength": 1
    },
    "RemoteTerminalUnitId": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ]
    },
    "ReverseAngle": {
      "type": "number"
    },
    "RoadAngle": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ]
    },
    "ZeroDegreeReference": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "DeviceId",
    "DeviceName",
    "DeviceTypeId",
    "DeviceTypeName",
    "EndGunList",
    "FarmId",
    "FirmwareVersion",
    "IsConfigured",
    "MachineLength",
    "PanelId",
    "PanelTypeName",
    "ReverseAngle"
  ]
}
```

## Example
```json
{
  "DeviceId": "54E1175E-8744-4C27-856E-00F6D600115E",
  "DeviceName": "SF7000 - 1",
  "DeviceTypeId": "24E1175E-8744-4C27-856E-00F6D6001159",
  "DeviceTypeName": "Pivot",
  "EndGunList": [
    {
      "EndGunID": "64E1175E-8744-4C27-856E-00F6D600115E",
      "EndGunType": "WB1"
    }
  ],
  "FarmId": "84E1175E-8744-4C27-856E-00F6D600115E",
  "FirmwareVersion": "",
  "ForwardAngle": null,
  "IsConfigured": true,
  "Latitude": null,
  "Longitude": null,
  "LrduDistance": null,
  "MachineLength": 23,
  "PanelId": "74E1175E-8744-4C27-856E-00F6D600115U",
  "PanelTypeName": "Pivot",
  "RemoteTerminalUnitId": null,
  "ReverseAngle": 45,
  "RoadAngle": null,
  "ZeroDegreeReference": null
}
```

# application/vnd.valleyix.machine.status.1+json

## Schema
```json
{
  "id": "valleyix-formats://application/vnd.valleyix.machine.status.1+json",
  "description": "application/vnd.valleyix.machine.status.1+json",
  "type": "object",
  "properties": {
    "AppliedPercent": {
      "type": "string",
      "minLength": 1
    },
    "AutoPilotMode": {
      "type": "string",
      "minLength": 1
    },
    "AutoRestart": {
      "type": "string",
      "minLength": 1
    },
    "AutoStopShutdown": {
      "type": "string",
      "minLength": 1
    },
    "Aux1In": {
      "type": "string",
      "minLength": 1
    },
    "Aux1Out": {
      "type": "string",
      "minLength": 1
    },
    "Aux2In": {
      "type": "string",
      "minLength": 1
    },
    "Aux2Out": {
      "type": "string",
      "minLength": 1
    },
    "BbRamShutdown": {
      "type": "string",
      "minLength": 1
    },
    "CommandShutdown": {
      "type": "string",
      "minLength": 1
    },
    "CruiseControl": {
      "type": "string",
      "minLength": 1
    },
    "CurrentPosition": {
      "type": "string",
      "minLength": 1
    },
    "DailyOpsEnable": {
      "type": "string",
      "minLength": 1
    },
    "DailyOpsShutdown": {
      "type": "string",
      "minLength": 1
    },
    "Depth": {
      "type": "string",
      "minLength": 1
    },
    "DeviceId": {
      "type": "string",
      "minLength": 1
    },
    "Direction": {
      "type": "string",
      "minLength": 1
    },
    "DirectionShutdown": {
      "type": "string",
      "minLength": 1
    },
    "DualMode": {
      "type": "string",
      "minLength": 1
    },
    "DualSpanPanel": {
      "type": "string",
      "minLength": 1
    },
    "EndGunState": {
      "type": "string",
      "minLength": 1
    },
    "FarmId": {
      "type": "string",
      "minLength": 1
    },
    "FlowShutdown": {
      "type": "string",
      "minLength": 1
    },
    "GpsComShutdown": {
      "type": "string",
      "minLength": 1
    },
    "GpsSignalShutdown": {
      "type": "string",
      "minLength": 1
    },
    "HighPressureShutdown": {
      "type": "string",
      "minLength": 1
    },
    "HourMeter": {
      "type": "string",
      "minLength": 1
    },
    "HoursPerPass": {
      "type": "string",
      "minLength": 1
    },
    "HoursWet": {
      "type": "string",
      "minLength": 1
    },
    "LinearPosition": {
      "type": "string",
      "minLength": 1
    },
    "NoAcknowledgeShutdown": {
      "type": "string",
      "minLength": 1
    },
    "PanelLockout": {
      "type": "string",
      "minLength": 1
    },
    "PercentTimer": {
      "type": "string",
      "minLength": 1
    },
    "PlcWideBoundary2State": {
      "type": "string",
      "minLength": 1
    },
    "PlcWideBoundary3State": {
      "type": "string",
      "minLength": 1
    },
    "PowerShutdown": {
      "type": "string",
      "minLength": 1
    },
    "Pressure": {
      "type": "string",
      "minLength": 1
    },
    "PressureSwitch": {
      "type": "string",
      "minLength": 1
    },
    "ProgramShutdown": {
      "type": "string",
      "minLength": 1
    },
    "ProximityShutdown": {
      "type": "string",
      "minLength": 1
    },
    "PulseCounter0": {
      "type": "string",
      "minLength": 1
    },
    "PulsePerMinute0": {
      "type": "string",
      "minLength": 1
    },
    "RelayComShutdown": {
      "type": "string",
      "minLength": 1
    },
    "Sis": {
      "type": "string",
      "minLength": 1
    },
    "SisAngle": {
      "type": "string",
      "minLength": 1
    },
    "SisShutdown": {
      "type": "string",
      "minLength": 1
    },
    "SpanComShutdown": {
      "type": "string",
      "minLength": 1
    },
    "SpanPressure": {
      "type": "string",
      "minLength": 1
    },
    "StatusDate": {
      "type": "string",
      "minLength": 1
    },
    "StoredProgramRunning": {
      "type": "string",
      "minLength": 1
    },
    "SystemStatus": {
      "type": "string",
      "minLength": 1
    },
    "TemperatureShutdown": {
      "type": "string",
      "minLength": 1
    },
    "TirePressureLowWarning": {
      "type": "string",
      "minLength": 1
    },
    "TirePressureShutdown": {
      "type": "string",
      "minLength": 1
    },
    "Transition": {
      "type": "string",
      "minLength": 1
    },
    "Voltage": {
      "type": "string",
      "minLength": 1
    },
    "VriActive": {
      "type": "string",
      "minLength": 1
    },
    "VriMode": {
      "type": "string",
      "minLength": 1
    },
    "WaterMode": {
      "type": "string",
      "minLength": 1
    },
    "WideBoundaryState": {
      "type": "string",
      "minLength": 1
    },
    "WindControlEnable": {
      "type": "string"
    },
    "WindShutdown": {
      "type": "string",
      "minLength": 1
    },
    "Zone": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "AppliedPercent",
    "AutoPilotMode",
    "AutoRestart",
    "AutoStopShutdown",
    "Aux1In",
    "Aux1Out",
    "Aux2In",
    "Aux2Out",
    "BbRamShutdown",
    "CommandShutdown",
    "CruiseControl",
    "CurrentPosition",
    "DailyOpsEnable",
    "DailyOpsShutdown",
    "Depth",
    "DeviceId",
    "Direction",
    "DirectionShutdown",
    "DualMode",
    "DualSpanPanel",
    "EndGunState",
    "FarmId",
    "FlowShutdown",
    "GpsComShutdown",
    "GpsSignalShutdown",
    "HighPressureShutdown",
    "HourMeter",
    "HoursPerPass",
    "HoursWet",
    "LinearPosition",
    "NoAcknowledgeShutdown",
    "PanelLockout",
    "PercentTimer",
    "PlcWideBoundary2State",
    "PlcWideBoundary3State",
    "PowerShutdown",
    "Pressure",
    "PressureSwitch",
    "ProgramShutdown",
    "ProximityShutdown",
    "PulseCounter0",
    "PulsePerMinute0",
    "RelayComShutdown",
    "Sis",
    "SisAngle",
    "SisShutdown",
    "SpanComShutdown",
    "SpanPressure",
    "StatusDate",
    "StoredProgramRunning",
    "SystemStatus",
    "TemperatureShutdown",
    "TirePressureLowWarning",
    "TirePressureShutdown",
    "Transition",
    "Voltage",
    "VriActive",
    "VriMode",
    "WaterMode",
    "WideBoundaryState",
    "WindControlEnable",
    "WindShutdown",
    "Zone"
  ]
}
```

## Example
```json
{
  "AppliedPercent": "15.0",
  "AutoPilotMode": "Linear",
  "AutoRestart": "On",
  "AutoStopShutdown": "Ok",
  "Aux1In": "Off",
  "Aux1Out": "Off",
  "Aux2In": "Off",
  "Aux2Out": "On",
  "BbRamShutdown": "Ok",
  "CommandShutdown": "Ok",
  "CruiseControl": "Off",
  "CurrentPosition": "295.9",
  "DailyOpsEnable": "Disabled",
  "DailyOpsShutdown": "Ok",
  "Depth": "6.67",
  "DeviceId": "3fecf71e-d669-403f-b6c7-8e5ce05edd05",
  "Direction": "Reverse",
  "DirectionShutdown": "Ok",
  "DualMode": "None",
  "DualSpanPanel": "Single",
  "EndGunState": "Off",
  "FarmId": "1dfbe054-15c2-493e-acbd-093c31e2cb21",
  "FlowShutdown": "Ok",
  "GpsComShutdown": "Ok",
  "GpsSignalShutdown": "Ok",
  "HighPressureShutdown": "Ok",
  "HourMeter": "5407.8",
  "HoursPerPass": "146.7",
  "HoursWet": "3119.8",
  "LinearPosition": "0",
  "NoAcknowledgeShutdown": "Ok",
  "PanelLockout": "Off",
  "PercentTimer": "15.0",
  "PlcWideBoundary2State": "On",
  "PlcWideBoundary3State": "On",
  "PowerShutdown": "Ok",
  "Pressure": "21",
  "PressureSwitch": "Off",
  "ProgramShutdown": "Ok",
  "ProximityShutdown": "Ok",
  "PulseCounter0": "0",
  "PulsePerMinute0": "0",
  "RelayComShutdown": "Ok",
  "Sis": "On",
  "SisAngle": "66.0",
  "SisShutdown": "Ok",
  "SpanComShutdown": "Ok",
  "SpanPressure": "Not Configured",
  "StatusDate": "1407408641000",
  "StoredProgramRunning": "Off",
  "SystemStatus": "Running",
  "TemperatureShutdown": "Ok",
  "TirePressureLowWarning": "Ok",
  "TirePressureShutdown": "Ok",
  "Transition": "Manual",
  "Voltage": "448",
  "VriActive": "Off",
  "VriMode": "Z",
  "WaterMode": "Wet",
  "WideBoundaryState": "On",
  "WindControlEnable": "",
  "WindShutdown": "Ok",
  "Zone": "A"
}
```

# application/vnd.valleyix.machine.VRIZones.1+json

## Schema
```json
{
  "id": "valleyix-formats://application/vnd.valleyix.machine.VRIZones.1+json",
  "description": "applcation/vnd.valleyix.machine.VRIZones.1+json",
  "type": "object",
  "addtionalProperties": true,
  "properties": {
    "DeviceId": {
      "type": "string"
    },
    "PivotLength": {
      "type": "number"
    },
    "PivotZones": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "properties": {
          "CycleTime": {
            "type": "number"
          },
          "EndLength": {
            "type": "number"
          },
          "StartLength": {
            "type": "number"
          },
          "ZoneDisplayId": {
            "type": "number"
          }
        },
        "required": [
          "CycleTime",
          "EndLength",
          "StartLength",
          "ZoneDisplayId"
        ]
      }
    }
  },
  "required": [
    "DeviceId",
    "PivotLength",
    "PivotZones"
  ]
}
```

## Example
```json
{
  "DeviceId": "F0FF610C-BF2A-4729-AEAD-1FA1C4BCEB2F",
  "PivotLength": 500,
  "PivotZones": [
    {
      "CycleTime": 20,
      "EndLength": 100,
      "StartLength": 0,
      "ZoneDisplayId": 1
    },
    {
      "CycleTime": 20,
      "EndLength": 300,
      "StartLength": 100,
      "ZoneDisplayId": 2
    },
    {
      "CycleTime": 20,
      "EndLength": 500,
      "StartLength": 300,
      "ZoneDisplayId": 3
    }
  ]
}
```

# application/vnd.valleyix.machine.work-order.1+json

## Schema
```json
{
  "id": "valleyix-formats://application/vnd.valleyix.machine.work-order.1+json",
  "description": "applcation/vnd.valleyix.machine.work-order.1+json",
  "type": "object",
  "addtionalProperties": true,
  "properties": {
    "orders": {
      "type": "array",
      "uniqueItems": true,
      "minItems": 1,
      "items": {
        "properties": {
          "DeviceId": {
            "type": "string"
          },
          "Aux1": {
            "type": "string"
          },
          "Aux2": {
            "type": "string"
          },
          "Depth": {
            "type": "string"
          },
          "Direction": {
            "type": "string"
          },
          "EndGun1": {
            "type": "string"
          },
          "EndGun2": {
            "type": "string"
          },
          "SIS": {
            "type": "string"
          },
          "SISAngle": {
            "type": "string"
          },
          "Water": {
            "type": "string"
          }
        },
        "required": [
          "DeviceId"
        ]
      }
    }
  },
  "required": [
    "orders"
  ]
}
```

## Example
```json
{
  "orders": [
    {
      "DeviceId": "137BB8A8-CB45-4BC9-A4A1-5CA097D1AC86",
      "Command": "SetStoredProgramRun",
      "ProgramSlotNumber": "1"
    },
    {
      "DeviceId": "BF81F52D-5160-43FA-BBA7-785D31CC8B75",
      "Command": "SetStoredProgramRun",
      "ProgramSlotNumber": "1"
    },
    {
      "DeviceId": "7FBBDB69-5E41-46B2-B75D-0DDC381651B8",
      "Depth": "1",
      "Direction": "Forward",
      "SIS": "On",
      "SISAngle": "180",
      "Water": "On"
    },
    {
      "DeviceId": "7FBBDB69-5E41-46B2-B75D-0DDC381651B8",
      "SIS": "Off",
      "Water": "Off"
    },
    {
      "DeviceId": "7FBBDB69-5E41-46B2-B75D-0DDC381651B8",
      "Aux1": "On",
      "Aux2": "On",
      "Depth": "1",
      "Direction": "Forward",
      "EndGun1": "On",
      "EndGun2": "Off",
      "SIS": "On",
      "SISAngle": "180",
      "Water": "On"
    },
    {
      "DeviceId": "7FBBDB69-5E41-46B2-B75D-0DDC381651B8",
      "Aux1": "Off",
      "Aux2": "Off",
      "SIS": "Off",
      "Water": "Off"
    }
  ]
}
```

[oada-formats]: http://github.com/oada-formats
