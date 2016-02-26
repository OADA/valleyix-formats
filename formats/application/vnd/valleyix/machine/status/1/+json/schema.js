var refs = require('../../../../../../../refs.js');

module.exports = {
    id: refs.VALLEYIX_MACHINE_STATUS_ID,
    description: 'application/vnd.valleyix.machine.status.1+json',
    anyOf: [{
        type: 'object',
        properties: {
            isRequestedDataAvailable: {
                type: 'boolean',
                value: false
            }
        },
        required: [
            'isRequestedDataAvailable'
        ]
    }, {
        type: 'object',
        properties: {
            AppliedPercent: {
                type: 'string',
                minLength: 1
            },
            AutoPilotMode: {
                type: 'string',
                minLength: 1
            },
            AutoRestart: {
                type: 'string',
                minLength: 1
            },
            AutoStopShutdown: {
                type: 'string',
                minLength: 1
            },
            Aux1In: {
                type: 'string',
                minLength: 1
            },
            Aux1Out: {
                type: 'string',
                minLength: 1
            },
            Aux2In: {
                type: 'string',
                minLength: 1
            },
            Aux2Out: {
                type: 'string',
                minLength: 1
            },
            BbRamShutdown: {
                type: 'string',
                minLength: 1
            },
            CommandShutdown: {
                type: 'string',
                minLength: 1
            },
            CruiseControl: {
                type: 'string',
                minLength: 1
            },
            CurrentPosition: {
                type: 'string',
                minLength: 1
            },
            DailyOpsEnable: {
                type: 'string',
                minLength: 1
            },
            DailyOpsShutdown: {
                type: 'string',
                minLength: 1
            },
            Depth: {
                type: 'string',
                minLength: 1
            },
            DeviceId: {
                type: 'string',
                minLength: 1
            },
            Direction: {
                type: 'string',
                minLength: 1
            },
            DirectionShutdown: {
                type: 'string',
                minLength: 1
            },
            DualMode: {
                type: 'string',
                minLength: 1
            },
            DualSpanPanel: {
                type: 'string',
                minLength: 1
            },
            EndGunState: {
                type: 'string',
                minLength: 1
            },
            FarmId: {
                type: 'string',
                minLength: 1
            },
            FlowShutdown: {
                type: 'string',
                minLength: 1
            },
            GpsComShutdown: {
                type: 'string',
                minLength: 1
            },
            GpsSignalShutdown: {
                type: 'string',
                minLength: 1
            },
            HighPressureShutdown: {
                type: 'string',
                minLength: 1
            },
            HourMeter: {
                type: 'string',
                minLength: 1
            },
            HoursPerPass: {
                type: 'string',
                minLength: 1
            },
            HoursWet: {
                type: 'string',
                minLength: 1
            },
            LinearPosition: {
                type: 'string',
                minLength: 1
            },
            NoAcknowledgeShutdown: {
                type: 'string',
                minLength: 1
            },
            PanelLockout: {
                type: 'string',
                minLength: 1
            },
            PercentTimer: {
                type: 'string',
                minLength: 1
            },
            PlcWideBoundary2State: {
                type: 'string',
                minLength: 1
            },
            PlcWideBoundary3State: {
                type: 'string',
                minLength: 1
            },
            PowerShutdown: {
                type: 'string',
                minLength: 1
            },
            Pressure: {
                type: 'string',
                minLength: 1
            },
            PressureSwitch: {
                type: 'string',
                minLength: 1
            },
            ProgramShutdown: {
                type: 'string',
                minLength: 1
            },
            ProximityShutdown: {
                type: 'string',
                minLength: 1
            },
            PulseCounter0: {
                type: 'string',
                minLength: 1
            },
            PulsePerMinute0: {
                type: 'string',
                minLength: 1
            },
            RelayComShutdown: {
                type: 'string',
                minLength: 1
            },
            Sis: {
                type: 'string',
                minLength: 1
            },
            SisAngle: {
                type: 'string',
                minLength: 1
            },
            SisShutdown: {
                type: 'string',
                minLength: 1
            },
            SpanComShutdown: {
                type: 'string',
                minLength: 1
            },
            SpanPressure: {
                type: 'string',
                minLength: 1
            },
            StatusDate: {
                type: 'string',
                minLength: 1
            },
            StoredProgramRunning: {
                type: 'string',
                minLength: 1
            },
            SystemStatus: {
                type: 'string',
                minLength: 1
            },
            TemperatureShutdown: {
                type: 'string',
                minLength: 1
            },
            TirePressureLowWarning: {
                type: 'string',
                minLength: 1
            },
            TirePressureShutdown: {
                type: 'string',
                minLength: 1
            },
            Transition: {
                type: 'string',
                minLength: 1
            },
            Voltage: {
                type: 'string',
                minLength: 1
            },
            VriActive: {
                type: 'string',
                minLength: 1
            },
            VriMode: {
                type: 'string',
                minLength: 1
            },
            WaterMode: {
                type: 'string',
                minLength: 1
            },
            WideBoundaryState: {
                type: 'string',
                minLength: 1
            },
            WindControlEnable: {
                type: 'string'
            },
            WindShutdown: {
                type: 'string',
                minLength: 1
            },
            Zone: {
                type: 'string',
                minLength: 1
            }
        },
        required: [
            'AppliedPercent',
            'AutoPilotMode',
            'AutoRestart',
            'AutoStopShutdown',
            'Aux1In',
            'Aux1Out',
            'Aux2In',
            'Aux2Out',
            'BbRamShutdown',
            'CommandShutdown',
            'CruiseControl',
            'CurrentPosition',
            'DailyOpsEnable',
            'DailyOpsShutdown',
            'Depth',
            'DeviceId',
            'Direction',
            'DirectionShutdown',
            'DualMode',
            'DualSpanPanel',
            'EndGunState',
            'FarmId',
            'FlowShutdown',
            'GpsComShutdown',
            'GpsSignalShutdown',
            'HighPressureShutdown',
            'HourMeter',
            'HoursPerPass',
            'HoursWet',
            'LinearPosition',
            'NoAcknowledgeShutdown',
            'PanelLockout',
            'PercentTimer',
            'PlcWideBoundary2State',
            'PlcWideBoundary3State',
            'PowerShutdown',
            'Pressure',
            'PressureSwitch',
            'ProgramShutdown',
            'ProximityShutdown',
            'PulseCounter0',
            'PulsePerMinute0',
            'RelayComShutdown',
            'Sis',
            'SisAngle',
            'SisShutdown',
            'SpanComShutdown',
            'SpanPressure',
            'StatusDate',
            'StoredProgramRunning',
            'SystemStatus',
            'TemperatureShutdown',
            'TirePressureLowWarning',
            'TirePressureShutdown',
            'Transition',
            'Voltage',
            'VriActive',
            'VriMode',
            'WaterMode',
            'WideBoundaryState',
            'WindControlEnable',
            'WindShutdown',
            'Zone'
        ]
    }]
};
