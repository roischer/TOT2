/*
* JS for MainHTML generated by Tiggzi
*
* Created on: Tuesday, March 05, 2013, 08:04:38 AM (PST)
*/
/************************************
* JS API provided by Exadel Tiggzi  *
************************************/
/* Setting project environment indicator */
Tiggzi.env = "bundle";
Tiggzi.getProjectGUID = function () {
    return '5222d4fe-abc1-47b3-9727-507ae206d76c';
}
Tiggzi.getTargetPlatform = function () {
    return '0';
}

function navigateTo(outcome, useAjax) {
    Tiggzi.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggzi.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggzi.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Tiggzi.setDetailContent(pageUrl);
}
/**********************
* SECURITY CONTEXTS  *
**********************/
/*******************************
*      SERVICE SETTINGS        *
********************************/
/*************************
*      SERVICES          *
*************************/
var GeolocationService = new Tiggr.GeolocationService({});
createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Tiggzi.AppPages = [{
    "name": "Search",
    "location": "#SEARCH"
}, {
    "name": "SEARCH_RESULTS",
    "location": "#SEARCH_RESULTS"
}, {
    "name": "restorePasswordConfirm",
    "location": "#RESTORE_PASSWORD_CONFIRM"
}, {
    "name": "MainHTML",
    "location": "#WELCOME_SCREEN"
}, {
    "name": "selectStationFromMap",
    "location": "#MAP_SELECT_STATION"
}, {
    "name": "TermsOfUse",
    "location": "#TERMS_OF_USE"
}, {
    "name": "Login",
    "location": "#LOGIN"
}, {
    "name": "sign_up",
    "location": "#SIGN_UP"
}, {
    "name": "restorePassword",
    "location": "#RESTORE_PASSWORD"
}, {
    "name": "Travel_Info",
    "location": "#TRAVEL_INFO"
}];
WELCOME_SCREEN_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'BTNtemp': 'j_76'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'WELCOME_SCREEN';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    WELCOME_SCREEN_beforeshow = function () {
        Tiggzi.CurrentScreen = 'WELCOME_SCREEN';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_4DD9_onLoad = WELCOME_SCREEN_onLoad = function () {

        screen_4DD9_elementsExtraJS();
        WELCOME_SCREEN_windowEvents();
        screen_4DD9_elementsEvents();
        checkLocalStorage();
    }
    // screen window events
    screen_4DD9_windowEvents = WELCOME_SCREEN_windowEvents = function () {
        $('#WELCOME_SCREEN').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_4DD9_elementsExtraJS = WELCOME_SCREEN_elementsExtraJS = function () {
        // screen (screen-4DD9) extra code
    }
    // screen elements handler
    screen_4DD9_elementsEvents = WELCOME_SCREEN_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });

    }
    $("#WELCOME_SCREEN").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        WELCOME_SCREEN_beforeshow();
    });
    if (runBeforeShow) {
        WELCOME_SCREEN_beforeshow();
    } else {
        WELCOME_SCREEN_onLoad();
    }
}
$("#WELCOME_SCREEN").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    WELCOME_SCREEN_js();
});
SEARCH_RESULTS_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_3': 'j_4',
        'mobilegridcell_4': 'j_5',
        'mobilegridcell_5': 'j_6',
        'mobilelabel1_12': 'j_7',
        'mobilegridcell_8': 'j_11',
        'mobilegridcell_9': 'j_12',
        'mobilelabel1_12': 'j_13',
        'mobilegridcell_6': 'j_8',
        'mobilegridcell_7': 'j_9',
        'mobilelabel1_12': 'j_10',
        'mobilegridcell_10': 'j_14',
        'mobilegridcell_11': 'j_15',
        'mobilelabel1_12': 'j_16',
        'mobilegrid_21': 'j_17',
        'mobilegridcell_22': 'j_18',
        'mobilegridcell_23': 'j_19',
        'mobilelabel1_12': 'j_20',
        'mobilelabel1_12': 'j_21',
        'mobilegrid_28': 'j_22',
        'mobilegridcell_29': 'j_23',
        'mobilelabel1_12': 'j_24',
        'mobilegridcell_30': 'j_25',
        'mobilelabel1_12': 'j_26',
        'mobilegridcell_33': 'j_31',
        'mobilelabel1_12': 'j_32',
        'mobilegridcell_35': 'j_34',
        'mobilelabel1_12': 'j_35',
        'mobilegridcell_37': 'j_37',
        'mobilelabel1_12': 'j_38',
        'mobilegridcell_31': 'j_27',
        'mobilebutton1_43': 'j_28',
        'mobilegridcell_32': 'j_29',
        'mobileimage_44': 'j_30',
        'mobilegridcell_34': 'j_33',
        'mobilegridcell_36': 'j_36',
        'mobilegridcell_38': 'j_39',
        'mobilegrid_45': 'j_40',
        'mobilegridcell_46': 'j_41',
        'mobilebutton1_50': 'j_42',
        'mobilegridcell_47': 'j_43',
        'mobilegridcell_52': 'j_44',
        'mobilebutton1_51': 'j_45'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'SEARCH_RESULTS';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    SEARCH_RESULTS_beforeshow = function () {
        Tiggzi.CurrentScreen = 'SEARCH_RESULTS';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_3BCD_onLoad = SEARCH_RESULTS_onLoad = function () {
        screen_3BCD_elementsExtraJS();
        SEARCH_RESULTS_windowEvents();
        screen_3BCD_elementsEvents();
    }
    // screen window events
    screen_3BCD_windowEvents = SEARCH_RESULTS_windowEvents = function () {
        $('#SEARCH_RESULTS').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_3BCD_elementsExtraJS = SEARCH_RESULTS_elementsExtraJS = function () {
        // screen (screen-3BCD) extra code
    }
    // screen elements handler
    screen_3BCD_elementsEvents = SEARCH_RESULTS_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
    }
    $("#SEARCH_RESULTS").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        SEARCH_RESULTS_beforeshow();
    });
    if (runBeforeShow) {
        SEARCH_RESULTS_beforeshow();
    } else {
        SEARCH_RESULTS_onLoad();
    }
}
$("#SEARCH_RESULTS").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    SEARCH_RESULTS_js();
});
SEARCH_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_7': 'j_49',
        'mobilegridcell_8': 'j_50',
        'mobilegridcell_9': 'j_51',
        'TBDeparture': 'searchTBDeparture',
        'mobilegridcell_33': 'j_56',
        'LBLDeparture': 'j_57',
        'mobilegridcell_10': 'j_53',
        'mobilegridcell_11': 'j_54',
        'TBDestination': 'TBDestination',
        'mobilegridcell_34': 'j_58',
        'LBLDestination': 'j_59',
        'mobilegrid_15': 'j_60',
        'mobilegridcell_16': 'j_61',
        'mobilegridcell_17': 'j_62',
        'dateTimePicker': 'j_63',
        'mobilegridcell_40': 'j_66',
        'LBLDate': 'j_67',
        'mobilegridcell_18': 'j_64',
        'mobilegridcell_19': 'j_65',
        'mobilegridcell_41': 'j_68',
        'LBLTime': 'j_69',
        'BTNSearch': 'BTNSearch',
        'LBLlastLanes': 'j_71'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'SEARCH';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    SEARCH_beforeshow = function () {
        Tiggzi.CurrentScreen = 'SEARCH';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
        clearSearchResults();
    }
    // screen onload
    screen_DC96_onLoad = SEARCH_onLoad = function () {
        screen_DC96_elementsExtraJS();
        SEARCH_windowEvents();
        screen_DC96_elementsEvents();
       
    }
    // screen window events
    screen_DC96_windowEvents = SEARCH_windowEvents = function () {
        $('#SEARCH').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_DC96_elementsExtraJS = SEARCH_elementsExtraJS = function () {
        // screen (screen-DC96) extra code
        /* dateTimePicker */
        mobiledatepicker1_selector = "#j_63";
        mobiledatepicker1_dataPickerOptions = {
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            maxDate: new Date("03/30/2013"),
            minDate: new Date("02/13/2013"),
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            showOtherMonths: true
        };
        mobiledatepicker1_dataPickerOptions.defaultDate = $.datepicker.formatDate(mobiledatepicker1_dataPickerOptions.dateFormat, new Date("02/13/2013"));
        Tiggzi.__registerComponent('dateTimePicker', new Tiggzi.TiggziMobileDatePickerComponent("j_63", mobiledatepicker1_dataPickerOptions));
    }
    // screen elements handler
    screen_DC96_elementsEvents = SEARCH_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
        $('#j_3 [name="BTNSearch"]').die().live({
            click: function () {
                findTrains();
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('SEARCH_RESULTS', {
                        transition: 'flip',
                        reverse: false
                    });
                }
            }
        });
    }
    $("#SEARCH").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        SEARCH_beforeshow();
    });
    if (runBeforeShow) {
        SEARCH_beforeshow();
    } else {
        SEARCH_onLoad();
    }
}
$("#SEARCH").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    SEARCH_js();
});
RESTORE_PASSWORD_CONFIRM_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'lblMessage': 'j_80',
        'btnOK': 'j_81'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'RESTORE_PASSWORD_CONFIRM';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    RESTORE_PASSWORD_CONFIRM_beforeshow = function () {
        Tiggzi.CurrentScreen = 'RESTORE_PASSWORD_CONFIRM';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_F8DB_onLoad = RESTORE_PASSWORD_CONFIRM_onLoad = function () {
        screen_F8DB_elementsExtraJS();
        RESTORE_PASSWORD_CONFIRM_windowEvents();
        screen_F8DB_elementsEvents();
    }
    // screen window events
    screen_F8DB_windowEvents = RESTORE_PASSWORD_CONFIRM_windowEvents = function () {
        $('#RESTORE_PASSWORD_CONFIRM').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_F8DB_elementsExtraJS = RESTORE_PASSWORD_CONFIRM_elementsExtraJS = function () {
        // modalPanel (screen-F8DB) extra code
    }
    // screen elements handler
    screen_F8DB_elementsEvents = RESTORE_PASSWORD_CONFIRM_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
        $('#j_3 [name="btnOK"]').die().live({
            click: function () {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Login', {
                        reverse: false
                    });
                }
            }
        });
    }
    $("#RESTORE_PASSWORD_CONFIRM").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        RESTORE_PASSWORD_CONFIRM_beforeshow();
    });
    if (runBeforeShow) {
        RESTORE_PASSWORD_CONFIRM_beforeshow();
    } else {
        RESTORE_PASSWORD_CONFIRM_onLoad();
    }
}
$("#RESTORE_PASSWORD_CONFIRM").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    RESTORE_PASSWORD_CONFIRM_js();
});
TERMS_OF_USE_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'TextArea': 'j_86',
        'BTNagree': 'j_87'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'TERMS_OF_USE';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    TERMS_OF_USE_beforeshow = function () {
        Tiggzi.CurrentScreen = 'TERMS_OF_USE';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_BD15_onLoad = TERMS_OF_USE_onLoad = function () {
        screen_BD15_elementsExtraJS();
        TERMS_OF_USE_windowEvents();
        screen_BD15_elementsEvents();
    }
    // screen window events
    screen_BD15_windowEvents = TERMS_OF_USE_windowEvents = function () {
        $('#TERMS_OF_USE').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_BD15_elementsExtraJS = TERMS_OF_USE_elementsExtraJS = function () {
        // screen (screen-BD15) extra code
    }
    // screen elements handler
    screen_BD15_elementsEvents = TERMS_OF_USE_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
    }
    $("#TERMS_OF_USE").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        TERMS_OF_USE_beforeshow();
    });
    if (runBeforeShow) {
        TERMS_OF_USE_beforeshow();
    } else {
        TERMS_OF_USE_onLoad();
    }
}
$("#TERMS_OF_USE").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    TERMS_OF_USE_js();
});
MAP_SELECT_STATION_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {};
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'MAP_SELECT_STATION';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    MAP_SELECT_STATION_beforeshow = function () {
        Tiggzi.CurrentScreen = 'MAP_SELECT_STATION';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_0F73_onLoad = MAP_SELECT_STATION_onLoad = function () {
        screen_0F73_elementsExtraJS();
        MAP_SELECT_STATION_windowEvents();
        screen_0F73_elementsEvents();
    }
    // screen window events
    screen_0F73_windowEvents = MAP_SELECT_STATION_windowEvents = function () {
        $('#MAP_SELECT_STATION').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_0F73_elementsExtraJS = MAP_SELECT_STATION_elementsExtraJS = function () {
        // screen (screen-0F73) extra code
    }
    // screen elements handler
    screen_0F73_elementsEvents = MAP_SELECT_STATION_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
    }
    $("#MAP_SELECT_STATION").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        MAP_SELECT_STATION_beforeshow();
    });
    if (runBeforeShow) {
        MAP_SELECT_STATION_beforeshow();
    } else {
        MAP_SELECT_STATION_onLoad();
    }
}
$("#MAP_SELECT_STATION").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    MAP_SELECT_STATION_js();
});
LOGIN_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilecontentlayer': 'j_1',
        'mobileheader': 'j_2',
        'mobilecontainer': 'j_3',
        'spacer': 'j_127',
        'lblEmailRequest': 'j_124',
        'tbEmail': 'j_125',
        'btnOK': 'j_126',
        'mobilefooter1': 'j_46',
        'annotationslayer': 'j_47',
        'mobilecontentlayer': 'j_1',
        'mobileheader': 'j_2',
        'mobilecontainer': 'j_3',
        'lblMessage': 'j_80',
        'btnOK': 'j_81',
        'mobilefooter1': 'j_46',
        'annotationslayer': 'j_47',
        'LBLConnect': 'j_104',
        'mobilegrid_3': 'j_95',
        'mobilegridcell_4': 'j_96',
        'TBEmail': 'LoginTBEmail',
        'mobilegridcell_5': 'j_98',
        'LBLEmail': 'j_99',
        'mobilegridcell_6': 'j_100',
        'TBPassword': 'LoginTBPassword',
        'mobilegridcell_7': 'j_102',
        'LBLPassword': 'j_103',
        'mobilegrid_56': 'j_105',
        'mobilegridcell_57': 'j_106',
        'BTNOK': 'loginBTNOK',
        'mobilegridcell_58': 'j_108',
        'CHKBXrememberMe': 'j_109',
        'CHKBXRememberMe': 'CHKBXrememberMe',
        'lblForgotPasswordLink': 'loginlblForgotPasswordLink',
        'space_78': 'j_115',
        'mobilegrid_68': 'j_111',
        'mobilegridcell_69': 'j_112',
        'BTNNewUser': 'loginBTNNewUser',
        'mobilegridcell_70': 'j_114',
        'mobilegrid_81': 'j_116',
        'mobilegridcell_82': 'j_117',
        'BTNfbConnect': 'loginBTNfbConnect',
        'mobilegridcell_83': 'j_119'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'LOGIN';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    LOGIN_beforeshow = function () {
        Tiggzi.CurrentScreen = 'LOGIN';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_3671_onLoad = LOGIN_onLoad = function () {

        screen_3671_elementsExtraJS();
        LOGIN_windowEvents();
        screen_3671_elementsEvents();
    }
    // screen window events
    screen_3671_windowEvents = LOGIN_windowEvents = function () {
        $('#LOGIN').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_3671_elementsExtraJS = LOGIN_elementsExtraJS = function () {
        // screen (screen-3671) extra code
    }
    // screen elements handler
    screen_3671_elementsEvents = LOGIN_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
        $('#j_3 [name="btnOK"]').die().live({
            click: function () {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('restorePasswordConfirm', {
                        transition: 'pop'
                    });
                }
            }
        });
        $('#j_3 [name="btnOK"]').die().live({
            click: function () {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('Login', {
                        reverse: false
                    });
                }
            }
        });


    }
    $("#LOGIN").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        LOGIN_beforeshow();
    });
    if (runBeforeShow) {
        LOGIN_beforeshow();
    } else {
        LOGIN_onLoad();
    }
}
$("#LOGIN").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    LOGIN_js();
});
RESTORE_PASSWORD_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'spacer': 'j_127',
        'lblEmailRequest': 'j_124',
        'tbEmail': 'j_125',
        'btnOK': 'j_126'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'RESTORE_PASSWORD';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    RESTORE_PASSWORD_beforeshow = function () {
        Tiggzi.CurrentScreen = 'RESTORE_PASSWORD';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_5F7F_onLoad = RESTORE_PASSWORD_onLoad = function () {
        screen_5F7F_elementsExtraJS();
        RESTORE_PASSWORD_windowEvents();
        screen_5F7F_elementsEvents();
    }
    // screen window events
    screen_5F7F_windowEvents = RESTORE_PASSWORD_windowEvents = function () {
        $('#RESTORE_PASSWORD').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_5F7F_elementsExtraJS = RESTORE_PASSWORD_elementsExtraJS = function () {
        // modalPanel (screen-5F7F) extra code
    }
    // screen elements handler
    screen_5F7F_elementsEvents = RESTORE_PASSWORD_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
        $('#j_3 [name="btnOK"]').die().live({
            click: function () {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('restorePasswordConfirm', {
                        transition: 'pop'
                    });
                }
            }
        });
    }
    $("#RESTORE_PASSWORD").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        RESTORE_PASSWORD_beforeshow();
    });
    if (runBeforeShow) {
        RESTORE_PASSWORD_beforeshow();
    } else {
        RESTORE_PASSWORD_onLoad();
    }
}
$("#RESTORE_PASSWORD").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    RESTORE_PASSWORD_js();
});
SIGN_UP_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_2': 'j_129',
        'mobilegridcell_3': 'j_130',
        'TBFirstName': 'SIGN_UP_TBFirstName',
        'mobilegridcell_4': 'j_132',
        'LBLFirstName': 'j_133',
        'mobilegridcell_5': 'j_134',
        'TBFamilyName': 'SIGN_UP_TBFamilyName',
        'mobilegridcell_6': 'j_136',
        'LBLFamilyName': 'j_137',
        'mobilegridcell_9': 'j_138',
        'DTPICKRBirthday': 'SIGN_UP_DTPICKRBirthday',
        'mobilegridcell_10': 'j_140',
        'LBLBirthDate': 'j_141',
        'mobilegridcell_11': 'j_142',
        'SelectSex': 'SIGN_UP_DDLSelectSex',
        'mobileselectmenuitem1': 'j_144',
        'mobilegridcell_12': 'j_145',
        'LBLSex': 'j_146',
        'mobilegridcell_13': 'j_147',
        'mobilegrid_28': 'j_148',
        'mobilegridcell_29': 'j_149',
        'TBEmailPrefix': 'SIGN_UP_TBEmailPrefix',
        'mobilegridcell_33': 'j_151',
        'mobilelabel1_36': 'j_152',
        'mobilegridcell_35': 'j_153',
        'TBEmailSufix': 'SIGN_UP_TBEmailSufix',
        'mobilegridcell_14': 'j_155',
        'LBLEmail': 'j_156',
        'mobilegridcell_15': 'j_157',
        'TBPassword': 'SIGN_UP_TBPassword',
        'mobilegridcell_16': 'j_159',
        'LBLPassword': 'j_160',
        'mobilegridcell_17': 'j_161',
        'TBPasswordConfirm': 'SIGN_UP_TBPasswordConfirm',
        'mobilegridcell_18': 'j_163',
        'LBLConfirmPassword': 'j_164',
        'mobilegrid_59': 'j_165',
        'mobilegridcell_60': 'j_166',
        'mobilegridcell_61': 'j_167',
        'mobilecheckboxgroup1_51': 'j_168',
        'CHKBXConfirmTerms': 'SIGN_UP_CHKBXconfirmTerms',
        'LINKTermOfUse': 'SIGN_UP_LINKTermOfUse',
        'mobilegridcell_64': 'j_171',
        'mobilegrid_67': 'j_172',
        'mobilegridcell_68': 'j_173',
        'mobilegridcell_69': 'j_174',
        'BTNOK': 'SIGN_UP_BTNOK',
        'mobilegridcell_72': 'j_176'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'SIGN_UP';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    SIGN_UP_beforeshow = function () {
        Tiggzi.CurrentScreen = 'SIGN_UP';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_44BF_onLoad = SIGN_UP_onLoad = function () {
        screen_44BF_elementsExtraJS();
        SIGN_UP_windowEvents();
        screen_44BF_elementsEvents();
    }
    // screen window events
    screen_44BF_windowEvents = SIGN_UP_windowEvents = function () {
        $('#SIGN_UP').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_44BF_elementsExtraJS = SIGN_UP_elementsExtraJS = function () {
        // screen (screen-44BF) extra code
        /* DTPICKRBirthday */
        mobiledatepicker2_selector = "#SIGN_UP_DTPICKRBirthday";
        mobiledatepicker2_dataPickerOptions = {
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            maxDate: new Date(""),
            minDate: new Date(""),
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            showOtherMonths: true
        };
        mobiledatepicker2_dataPickerOptions.defaultDate = $.datepicker.formatDate(mobiledatepicker2_dataPickerOptions.dateFormat, new Date("02/01/2013"));
        Tiggzi.__registerComponent('DTPICKRBirthday', new Tiggzi.TiggziMobileDatePickerComponent("SIGN_UP_DTPICKRBirthday", mobiledatepicker2_dataPickerOptions)); /* SelectSex */
        $("#SIGN_UP_DDLSelectSex").parent().find("a.ui-btn").attr("tabindex", "4");
    }
    // screen elements handler
    screen_44BF_elementsEvents = SIGN_UP_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
        $('#j_3 [name="LINKTermOfUse"]').die().live({
            click: function () {
                if (!$(this).attr('disabled')) {
                    Tiggr.navigateTo('', {
                        transition: 'pop'
                    });
                }
            }
        });
    }
    $("#SIGN_UP").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        SIGN_UP_beforeshow();
    });
    if (runBeforeShow) {
        SIGN_UP_beforeshow();
    } else {
        SIGN_UP_onLoad();
    }
}
$("#SIGN_UP").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    SIGN_UP_js();
});
TRAVEL_INFO_js = function (runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_12': 'j_199',
        'mobilegridcell_13': 'j_200',
        'mobilegridcell_14': 'j_201',
        'mobilelabel1_17': 'j_202',
        'mobilegridcell_37': 'j_203',
        'mobilegridcell_38': 'j_204',
        'mobilelabel1_12': 'j_205',
        'mobilegrid_2': 'j_181',
        'mobilegridcell_3': 'j_182',
        'mobilelabel1_12': 'j_183',
        'mobilegridcell_4': 'j_184',
        'mobilelabel1_12': 'j_185',
        'mobilegridcell_9': 'j_190',
        'mobilelabel1_12': 'j_191',
        'mobilegridcell_40': 'j_194',
        'mobilegridcell_5': 'j_186',
        'mobilegridcell_6': 'j_187',
        'mobilegridcell_10': 'j_192',
        'mobilegridcell_41': 'j_195',
        'mobilelabel1_12': 'j_196',
        'mobilegridcell_7': 'j_188',
        'mobilegridcell_8': 'j_189',
        'mobilegridcell_11': 'j_193',
        'mobilegridcell_42': 'j_197',
        'mobilelabel1_12': 'j_198'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    Tiggr.CurrentScreen = 'TRAVEL_INFO';
    /*************************
    * NONVISUAL COMPONENTS  *
    *************************/
    var datasources = [];
    // Tiggzi Push-notification registration service
    /************************
    * EVENTS AND HANDLERS  *
    ************************/
    TRAVEL_INFO_beforeshow = function () {
        Tiggzi.CurrentScreen = 'TRAVEL_INFO';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_C257_onLoad = TRAVEL_INFO_onLoad = function () {
        screen_C257_elementsExtraJS();
        TRAVEL_INFO_windowEvents();
        screen_C257_elementsEvents();
    }
    // screen window events
    screen_C257_windowEvents = TRAVEL_INFO_windowEvents = function () {
        $('#TRAVEL_INFO').bind('pageshow orientationchange', function () {
            adjustContentHeightWithPadding();
        });
    }
    // screen elements extra js
    screen_C257_elementsExtraJS = TRAVEL_INFO_elementsExtraJS = function () {
        // screen (screen-C257) extra code
    }
    // screen elements handler
    screen_C257_elementsEvents = TRAVEL_INFO_elementsEvents = function () {
        $("a :input,a a,a fieldset label").live({
            click: function (event) {
                event.stopPropagation();
            }
        });
    }
    $("#TRAVEL_INFO").die("pagebeforeshow").live("pagebeforeshow", function (event, ui) {
        TRAVEL_INFO_beforeshow();
    });
    if (runBeforeShow) {
        TRAVEL_INFO_beforeshow();
    } else {
        TRAVEL_INFO_onLoad();
    }
}
$("#TRAVEL_INFO").die("pageinit").live("pageinit", function (event, ui) {
    Tiggzi.processSelectMenu($(this));
    TRAVEL_INFO_js();
});
