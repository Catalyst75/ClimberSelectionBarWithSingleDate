define(["underscore", "./lib/js/components/pp-cl-about/pp-cl-about"], function (a) {
    "use strict";
    var b = function (a) {
            if ("DATERANGE" === a.listType) {
                var b = "=" === a.qListObjectDef.qDef.qFieldDefs[0].substring(0, 1) ? a.qListObjectDef.qDef.qFieldDefs[0].substring(1) : a.qListObjectDef.qDef.qFieldDefs[0];
                a.date.min.qValueExpression.qExpr = "=Min(" + b + ")", a.date.max.qValueExpression.qExpr = "=Max(" + b + ")"
            } else a.date.min.qValueExpression.qExpr = "", a.date.max.qValueExpression.qExpr = ""
        },
        c = [{
            value: "TODAY",
            label: "Today"
        }, {
            value: "YESTERDAY",
            label: "Yesterday"
        }, {
            value: "LAST07DAYS",
            label: "Last 7 days"
        }, {
            value: "LAST14DAYS",
            label: "Last 14 days"
        }, {
            value: "LAST28DAYS",
            label: "Last 28 days"
        }, {
            value: "LAST30DAYS",
            label: "Last 30 days"
        }, {
            value: "LAST60DAYS",
            label: "Last 60 days"
        }, {
            value: "LAST90DAYS",
            label: "Last 90 days"
        }, {
            value: "THISWEEK",
            label: "This week"
        }, {
            value: "LASTWEEK",
            label: "Last week"
        }, {
            value: "THISMONTH",
            label: "This month"
        }, {
            value: "LASTMONTH",
            label: "Last month"
        }, {
            value: "THISQUARTER",
            label: "This quarter"
        }, {
            value: "LASTQUARTER",
            label: "Last quarter"
        }, {
            value: "THISYEAR",
            label: "This year"
        }, {
            value: "LASTYEAR",
            label: "Last year"
        }, {
            value: "WTD",
            label: "Week to date"
        }, {
            value: "MTD",
            label: "Month to date"
        }, {
            value: "QTD",
            label: "Quarter to date"
        }, {
            value: "YTD",
            label: "Year to date"
        }, {
            value: "R11",
            label: "Rolling 11 months"
        }, {
            value: "R11FM",
            label: "Rolling 11 full months"
        }, {
            value: "R12",
            label: "Rolling 12 months"
        }, {
            value: "R12FM",
            label: "Rolling 12 full months"
        }],
        d = {
            type: "array",
            translation: "Lists",
            ref: "kfLists",
            allowAdd: !0,
            allowRemove: !0,
            allowMove: !0,
            addTranslation: "Add List",
            grouped: !0,
            itemTitleRef: "label",
            items: {
                listType: {
                    type: "string",
                    component: "dropdown",
                    label: "List type",
                    ref: "listType",
                    defaultValue: "FIELD",
                    options: [{
                        value: "FIELD",
                        label: "Field"
                    }, {
                        value: "VARIABLE",
                        label: "Variable"
                    }, {
                        value: "FLAG",
                        label: "Flag"
                    }, {
                        value: "DATERANGE",
                        label: "Date range picker"
                    }],
                    change: function (a) {
                        b(a)
                    }
                },
                field: {
                    component: "expression",
                    ref: "qListObjectDef.qDef.qFieldDefs.0",
                    defaultValue: "",
                    label: "Field",
                    show: function (a) {
                        return "FIELD" === a.listType || "FLAG" === a.listType || "DATERANGE" === a.listType
                    },
                    change: function (a) {
                        "" === a.label && (a.label = a.qListObjectDef.qDef.qFieldDefs[0]), "DATERANGE" === a.listType && b(a)
                    }
                },
                singleDatePicker: {
                    type: "boolean",
                    ref: "date.singleDate",
                    component: "switch",
                    label: "Single Date Picker",
                    defaultValue: !1,
                    options: [{
                        value: !0,
                        label: "Yes"
                    }, {
                        value: !1,
                        label: "No"
                    }],
                    show: function (a) {
                        return "DATERANGE" === a.listType
                    }
                },
                variable: {
                    type: "string",
                    ref: "variable",
                    label: "Variable",
                    defaultValue: "",
                    show: function (a) {
                        return "VARIABLE" == a.listType
                    },
                    change: function (a) {
                        "" != a.variable ? a.variableValue.qStringExpression.qExpr = "=" + a.variable : ""
                    }
                },
                showLabels: {
                    type: "boolean",
                    component: "switch",
                    label: "Show list label",
                    ref: "showLabels",
                    defaultValue: !1,
                    options: [{
                        value: !0,
                        label: "Labels"
                    }, {
                        value: !1,
                        label: "Labels off"
                    }]
                },
                listLabel: {
                    type: "string",
                    ref: "label",
                    expression: "optional",
                    label: "Label",
                    defaultValue: "",
                    show: function (a) {
                        return a.showLabels
                    }
                },
                fieldWarning: {
                    component: "text",
                    translation: "Field is a calculated dimension, initial selections not supported",
                    show: function (a) {
                        return ("FIELD" === a.listType || "FLAG" === a.listType || "DATERANGE" === a.listType) && "=" === a.qListObjectDef.qDef.qFieldDefs[0].substring(0, 1)
                    }
                },
                variableValues: {
                    type: "string",
                    ref: "variableValues",
                    expression: "optional",
                    label: "Variable values (comma separated)",
                    defaultValue: "",
                    show: function (a) {
                        return "VARIABLE" == a.listType
                    }
                },
                variableValue: {
                    type: "string",
                    expression: "always",
                    expressionType: "dimension",
                    ref: "variableValue.qStringExpression.qExpr",
                    label: "Variable value",
                    show: !1
                },
                initSelection: {
                    type: "string",
                    ref: "initSelection",
                    expression: "optional",
                    label: "Initial selection",
                    show: function (a) {
                        return "DATERANGE" !== a.listType
                    },
                    readOnly: function (a) {
                        return "=" === a.qListObjectDef.qDef.qFieldDefs[0].substring(0, 1)
                    }
                },
                dualText: {
                    component: "text",
                    style: "hint",
                    translation: 'Use numeric value for "dual" fields',
                    show: function (a) {
                        return "DATERANGE" !== a.listType
                    }
                },
                initSelectionSeparatorComma: {
                    type: "boolean",
                    component: "switch",
                    label: "Initial selection separator",
                    ref: "initSelectionSeparatorComma",
                    defaultValue: !0,
                    options: [{
                        value: !0,
                        label: "Comma separator"
                    }, {
                        value: !1,
                        label: "Custom separator"
                    }],
                    show: function (a) {
                        return "DATERANGE" !== a.listType && "VARIABLE" !== a.listType
                    }
                },
                initSelectionSeparator: {
                    type: "string",
                    ref: "initSelectionSeparator",
                    label: "Custom separator",
                    show: function (a) {
                        return "DATERANGE" !== a.listType && !a.initSelectionSeparatorComma
                    },
                    readOnly: function (a) {
                        return "=" === a.qListObjectDef.qDef.qFieldDefs[0].substring(0, 1)
                    }
                },
                customSortOrder: {
                    type: "boolean",
                    ref: "customSortOrder",
                    component: "switch",
                    label: "Sort order",
                    defaultValue: !1,
                    options: [{
                        value: !0,
                        label: "Show"
                    }, {
                        value: !1,
                        label: "Hide"
                    }],
                    show: function (a) {
                        return "FIELD" == a.listType || "FLAG" == a.listType
                    }
                },
                qListObjectDef: {
                    type: "boolean",
                    ref: "qListObjectDef.qShowAlternatives",
                    defaultValue: !0,
                    show: !1
                },
                qSortByLoadOrder: {
                    type: "numeric",
                    component: "dropdown",
                    label: "Sort by Load Order",
                    ref: "qListObjectDef.qDef.qSortCriterias.0.qSortByLoadOrder",
                    options: [{
                        value: 1,
                        label: "Ascending"
                    }, {
                        value: 0,
                        label: "No"
                    }, {
                        value: -1,
                        label: "Descending"
                    }],
                    defaultValue: 0,
                    show: function (a) {
                        return a.customSortOrder && ("FIELD" == a.listType || "FLAG" == a.listType)
                    }
                },
                qSortByState: {
                    type: "numeric",
                    component: "dropdown",
                    label: "Sort by State",
                    ref: "qListObjectDef.qDef.qSortCriterias.0.qSortByState",
                    options: [{
                        value: 1,
                        label: "Ascending"
                    }, {
                        value: 0,
                        label: "No"
                    }, {
                        value: -1,
                        label: "Descending"
                    }],
                    defaultValue: 0,
                    show: function (a) {
                        return a.customSortOrder && ("FIELD" == a.listType || "FLAG" == a.listType)
                    }
                },
                qSortByFrequency: {
                    type: "numeric",
                    component: "dropdown",
                    label: "Sort by Frequence",
                    ref: "qListObjectDef.qDef.qSortCriterias.0.qSortByFrequency",
                    options: [{
                        value: -1,
                        label: "Ascending"
                    }, {
                        value: 0,
                        label: "No"
                    }, {
                        value: 1,
                        label: "Descending"
                    }],
                    defaultValue: 0,
                    show: function (a) {
                        return a.customSortOrder && ("FIELD" == a.listType || "FLAG" == a.listType)
                    }
                },
                qSortByNumeric: {
                    type: "numeric",
                    component: "dropdown",
                    label: "Sort by Numeric",
                    ref: "qListObjectDef.qDef.qSortCriterias.0.qSortByNumeric",
                    options: [{
                        value: 1,
                        label: "Ascending"
                    }, {
                        value: 0,
                        label: "No"
                    }, {
                        value: -1,
                        label: "Descending"
                    }],
                    defaultValue: 0,
                    show: function (a) {
                        return a.customSortOrder && ("FIELD" == a.listType || "FLAG" == a.listType)
                    }
                },
                qSortByAscii: {
                    type: "numeric",
                    component: "dropdown",
                    label: "Sort by Alphabetical",
                    ref: "qListObjectDef.qDef.qSortCriterias.0.qSortByAscii",
                    options: [{
                        value: 1,
                        label: "Ascending"
                    }, {
                        value: 0,
                        label: "No"
                    }, {
                        value: -1,
                        label: "Descending"
                    }],
                    defaultValue: 0,
                    show: function (a) {
                        return a.customSortOrder && ("FIELD" == a.listType || "FLAG" == a.listType)
                    }
                },
                dateDefaultText: {
                    type: "string",
                    ref: "date.defaultText",
                    label: "No selection text",
                    defaultValue: "Select a date range",
                    show: function (a) {
                        return "DATERANGE" == a.listType
                    }
                },
                dateFromInitSelection: {
                    type: "string",
                    ref: "date.initSelectionFrom",
                    expression: "optional",
                    translation: "Date from initial selection",
                    defaultValue: "",
                    show: function (a) {
                        return "DATERANGE" === a.listType && !a.date.singleDate
                    }
                },
                dateToInitSelection: {
                    type: "string",
                    ref: "date.initSelectionTo",
                    expression: "optional",
                    translation: "Date to initial selection",
                    defaultValue: "",
                    show: function (a) {
                        return "DATERANGE" === a.listType && !a.date.singleDate
                    }
                },
                dateInitSelection: {
                    type: "string",
                    ref: "date.initSelection",
                    expression: "optional",
                    translation: "Date initial selection",
                    defaultValue: "",
                    show: function (a) {
                        return "DATERANGE" === a.listType && a.date.singleDate
                    }
                },
                displayDateFormat: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.displayFormat",
                    label: "Display date format",
                    defaultValue: "DEFAULT",
                    options: [{
                        value: "DEFAULT",
                        label: "Default format"
                    }, {
                        value: "MMMM D, YYYY",
                        label: "January 1, 1980"
                    }, {
                        value: "MMM D, YYYY",
                        label: "Jan 1, 1980"
                    }, {
                        value: "YYYY-MM-DD",
                        label: "1980-01-01"
                    }, {
                        value: "YYYYMMDD",
                        label: "19800101"
                    }],
                    show: function (a) {
                        return "DATERANGE" == a.listType
                    }
                },
                dateRangeMin: {
                    type: "string",
                    ref: "date.rangeMin",
                    expression: "optional",
                    translation: "Daterange min expression",
                    defaultValue: "",
                    show: function (a) {
                        return "DATERANGE" == a.listType
                    }
                },
                dateRangeMax: {
                    type: "string",
                    ref: "date.rangeMax",
                    expression: "optional",
                    translation: "Daterange max expression",
                    defaultValue: "",
                    show: function (a) {
                        return "DATERANGE" == a.listType
                    }
                },
                useDateRanges: {
                    type: "boolean",
                    ref: "date.useDateRanges",
                    component: "switch",
                    label: "Use date ranges",
                    defaultValue: !1,
                    options: [{
                        value: !0,
                        label: "Yes"
                    }, {
                        value: !1,
                        label: "No"
                    }],
                    show: function (a) {
                        return "DATERANGE" == a.listType && !a.date.singleDate
                    }
                },
                customRangeLabel: {
                    type: "string",
                    ref: "date.customRangeLabel",
                    label: "Custom range label",
                    defaultValue: "Custom Range",
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                alwaysShowCalenders: {
                    type: "boolean",
                    ref: "date.alwaysShowCalenders",
                    component: "switch",
                    label: "Always Show Calendars",
                    defaultValue: !1,
                    options: [{
                        value: !0,
                        label: "Show"
                    }, {
                        value: !1,
                        label: "Hide"
                    }],
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateToday: {
                    type: "string",
                    ref: "date.today",
                    expression: "optional",
                    translation: "Today expression",
                    defaultValue: "",
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange01: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.0.value",
                    label: "Date range 01",
                    defaultValue: c[0].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[0].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[0].value
                        }).label
                    }
                },
                dateRange01Label: {
                    type: "string",
                    ref: "date.dateRanges.0.label",
                    label: "Label date range 01",
                    defaultValue: c[0].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange2: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.1.value",
                    label: "Date range 02",
                    defaultValue: c[2].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[1].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[1].value
                        }).label
                    }
                },
                dateRange02Label: {
                    type: "string",
                    ref: "date.dateRanges.1.label",
                    label: "Label date range 02",
                    defaultValue: c[2].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange3: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.2.value",
                    label: "Date range 03",
                    defaultValue: c[3].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[2].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[2].value
                        }).label
                    }
                },
                dateRange03Label: {
                    type: "string",
                    ref: "date.dateRanges.2.label",
                    label: "Label date range 03",
                    defaultValue: c[3].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange4: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.3.value",
                    label: "Date range 04",
                    defaultValue: c[4].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[3].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[3].value
                        }).label
                    }
                },
                dateRange04Label: {
                    type: "string",
                    ref: "date.dateRanges.3.label",
                    label: "Label date range 04",
                    defaultValue: c[4].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange5: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.4.value",
                    label: "Date range 05",
                    defaultValue: c[11].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[4].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[4].value
                        }).label
                    }
                },
                dateRange05Label: {
                    type: "string",
                    ref: "date.dateRanges.4.label",
                    label: "Label date range 05",
                    defaultValue: c[11].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange6: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.5.value",
                    label: "Date range 06",
                    defaultValue: c[17].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[5].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[5].value
                        }).label
                    }
                },
                dateRange06Label: {
                    type: "string",
                    ref: "date.dateRanges.5.label",
                    label: "Label date range 06",
                    defaultValue: c[17].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange7: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.6.value",
                    label: "Date range 07",
                    defaultValue: c[19].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[6].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[6].value
                        }).label
                    }
                },
                dateRange07Label: {
                    type: "string",
                    ref: "date.dateRanges.6.label",
                    label: "Label date range 07",
                    defaultValue: c[19].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateRange8: {
                    type: "string",
                    component: "dropdown",
                    ref: "date.dateRanges.7.value",
                    label: "Date range 08",
                    defaultValue: c[21].value,
                    options: c,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    },
                    change: function (b) {
                        b.date.dateRanges[7].label = a.find(c, function (a) {
                            return a.value === b.date.dateRanges[7].value
                        }).label
                    }
                },
                dateRange08Label: {
                    type: "string",
                    ref: "date.dateRanges.7.label",
                    label: "Label date range 08",
                    defaultValue: c[21].label,
                    show: function (a) {
                        return "DATERANGE" == a.listType && a.date.useDateRanges && !a.date.singleDate
                    }
                },
                dateMin: {
                    type: "string",
                    ref: "date.min.qValueExpression.qExpr",
                    expression: "always",
                    defaultValue: "",
                    show: !1
                },
                dateMax: {
                    type: "string",
                    ref: "date.max.qValueExpression.qExpr",
                    expression: "always",
                    defaultValue: "",
                    show: !1
                },
                listVisable: {
                    type: "boolean",
                    ref: "listVisible",
                    label: "Visible",
                    show: function (a) {
                        return "DATERANGE" != a.listType
                    },
                    defaultValue: !0
                },
                InitialDataFetchWidth: {
                    type: "number",
                    ref: "qListObjectDef.qInitialDataFetch.0.qWidth",
                    label: "qWidth",
                    show: !1,
                    defaultValue: 10
                },
                InitialDataFetchHeight: {
                    type: "number",
                    ref: "qListObjectDef.qInitialDataFetch.0.qHeight",
                    label: "qHeight",
                    show: !1,
                    defaultValue: 1e3
                }
            }
        },
        e = {
            type: "string",
            component: "dropdown",
            label: "Initial selection mode",
            ref: "props.initSelectionMode",
            defaultValue: "ONCE",
            options: [{
                value: "ONCE",
                label: "Once per session"
            }, {
                value: "ON_SHEET",
                label: "On sheet"
            }]
        },
        f = {
            type: "string",
            component: "dropdown",
            label: "Align lists",
            ref: "props.floatMode",
            defaultValue: "LEFT",
            options: [{
                value: "LEFT",
                label: "Left"
            }, {
                value: "RIGHT",
                label: "Right"
            }, {
                value: "CENTER",
                label: "Center"
            }, {
                value: "CENTER-SPREAD",
                label: "Center Spread"
            }, {
                value: "STACK",
                label: "Stack"
            }, {
                value: "NONE",
                label: "None"
            }]
        },
        g = {
            type: "string",
            ref: "props.alignLabel",
            component: "buttongroup",
            label: "Align label",
            defaultValue: "LEFT",
            options: [{
                value: "LEFT",
                label: "Left"
            }, {
                value: "TOP",
                label: "Top"
            }]
        },
        h = {
            type: "items",
            translation: "Bookmarks.Selections",
            grouped: !0,
            items: {
                settings: {
                    type: "items",
                    label: "Settings",
                    translation: "Bookmarks.Selections",
                    items: {
                        initSelectionSetting: e
                    }
                }
            }
        },
        i = {
            component: "pp-cl-HorizontalSelectionBarWithSingleDate",
            translation: "Common.About",
            show: !0
        },
        j = {
            translation: "Common.About",
            type: "items",
            items: {
                about: i
            }
        },
        k = {
            uses: "settings",
            items: {
                appearance: {
                    type: "items",
                    translation: "Common.Appearance",
                    grouped: !0,
                    items: {
                        alignMode: f,
                        alignLabel: g
                    }
                }
            }
        };
    return {
        type: "items",
        component: "accordion",
        items: {
            lists: d,
            initSelectionSettings: h,
            appearance: k,
            aboutPanel: j
        }
    }
});