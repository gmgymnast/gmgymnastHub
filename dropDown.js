let ToggleGeneralDiscussionPostStatus = false;
let ToggleTechNewsPostStatus = false;
let ToggleOffTopicPostStatus = false;
let ToggleGmgymnastOfficialPostStatus = false;
let ToggleForumInformationPostStatus = false;

let ToggleGraphicsCardsPostStatus = false;
let ToggleMotherboardsPostStatus = false;
let ToggleCasesPSUPostStatus = false;
let ToggleLiquidCoolingPostStatus = false;
let ToggleAirCoolingPostStatus = false;
let TogglePeripheralsPostStatus = false;
let ToggleAudioPostStatus = false;
let ToggleStorageDevicesPostStatus = false;
let ToggleDisplaysPostStatus = false;
let ToggleNetworkingPostStatus = false;
let ToggleServersNASPostStatus = false;

let ToggleLookingForTeammatesPostStatus = false;
let TogglePCGamingPostStatus = false;
let ToggleConsoleGamingPostStatus = false;
let ToggleMobileGamingPostStatus = false;
let ToggleEsportsPostStatus = false;

let ToggleOperatingSystemsPostStatus = false;
let ToggleMobileWebsitesPostStatus = false;
let ToggleProgramsWebsitesAppsPostStatus = false;

let ToggleTheHub1DropDownArrow = true;
let ToggleTheHub2DropDownArrow = true;
let ToggleTheHub3DropDownArrow = true;
let ToggleTheHub4DropDownArrow = true;
let ToggleTheHub5DropDownArrow = true;

let getExpandArrow1 = document.querySelector(".indexTheHub1DropDownArrow");
let getExpandArrow2 = document.querySelector(".indexTheHub2DropDownArrow");
let getExpandArrow3 = document.querySelector(".indexTheHub3DropDownArrow");
let getExpandArrow4 = document.querySelector(".indexTheHub4DropDownArrow");
let getExpandArrow5 = document.querySelector(".indexTheHub5DropDownArrow");

let getFirstExcludeHeader = document.querySelector(".firstExcludeHeader");
let getSecondExcludeHeader = document.querySelector(".secondExcludeHeader");
let getThirdExcludeHeader = document.querySelector(".thirdExcludeHeader");
let getFourthExcludeHeader = document.querySelector(".fourthExcludeHeader");
let getFifthExcludeHeader = document.querySelector(".fifthExcludeHeader");

let getCreatePostGeneralDiscussion = document.querySelector(".Create-Post-General-Discussion");
let getCreatePostTechNews = document.querySelector(".Create-Post-Tech-News");
let getCreatePostOffTopic = document.querySelector(".Create-Post-Off-Topic");
let getCreatePostGmgymnastOfficial = document.querySelector(".Create-Post-Gmgymnast-Official");
let getCreatePostForumInformation = document.querySelector(".Create-Post-Forum-Information");

let getCreatePostGraphicsCards = document.querySelector(".Create-Post-Graphics-Cards");
let getCreatePostMotherboards = document.querySelector(".Create-Post-Motherboards");
let getCreatePostCasesPSU = document.querySelector(".Create-Post-Cases-PSU");
let getCreatePostLiquidCooling = document.querySelector(".Create-Post-Liquid-Cooling");
let getCreatePostAirCooling = document.querySelector(".Create-Post-Air-Cooling");
let getCreatePostPeripherals = document.querySelector(".Create-Post-Peripherals");
let getCreatePostAudio = document.querySelector(".Create-Post-Audio");
let getCreatePostStorageDevices = document.querySelector(".Create-Post-Storage-Devices");
let getCreatePostDisplays = document.querySelector(".Create-Post-Displays");
let getCreatePostNetworking = document.querySelector(".Create-Post-Networking");
let getCreatePostServersNAS = document.querySelector(".Create-Post-Servers-NAS");

let getCreatePostLookingForTeammates = document.querySelector(".Create-Post-Looking-For-Teammates");
let getCreatePostPCGaming = document.querySelector(".Create-Post-PC-Gaming");
let getCreatePostConsoleGaming = document.querySelector(".Create-Post-Console-Gaming");
let getCreatePostMobileGaming = document.querySelector(".Create-Post-Mobile-Gaming");
let getCreatePostEsports = document.querySelector(".Create-Post-Esports");

let getCreatePostOperatingSystems = document.querySelector(".Create-Post-Operating-Systems");
let getCreatePostProgramming = document.querySelector(".Create-Post-Programming");
let getCreatePostProgramsWebsitesApps = document.querySelector(".Create-Post-Programs-Websites-Apps");

getCreatePostGeneralDiscussion.style.display = "none";
getCreatePostTechNews.style.display = "none";
getCreatePostOffTopic.style.display = "none";
getCreatePostGmgymnastOfficial.style.display = "none";
getCreatePostForumInformation.style.display = "none";

getCreatePostGraphicsCards.style.display = "none";
getCreatePostMotherboards.style.display = "none";
getCreatePostCasesPSU.style.display = "none";
getCreatePostLiquidCooling.style.display = "none";
getCreatePostAirCooling.style.display = "none";
getCreatePostPeripherals.style.display = "none";
getCreatePostAudio.style.display = "none";
getCreatePostStorageDevices.style.display = "none";
getCreatePostDisplays.style.display = "none";
getCreatePostNetworking.style.display = "none";
getCreatePostServersNAS.style.display = "none";

getCreatePostLookingForTeammates.style.display = "none";
getCreatePostPCGaming.style.display = "none";
getCreatePostConsoleGaming.style.display = "none";
getCreatePostMobileGaming.style.display = "none";
getCreatePostEsports.style.display = "none";

getCreatePostOperatingSystems.style.display = "none";
getCreatePostProgramming.style.display = "none";
getCreatePostProgramsWebsitesApps.style.display = "none";

//Section 1

let onGeneralDiscussion = function() {
    getCreatePostGeneralDiscussion.style.display = "block";
}
let offGeneralDiscussion = function() {
    getCreatePostGeneralDiscussion.style.display = "none";
}

let onTechNews = function() {
    getCreatePostTechNews.style.display = "block";
}
let offTechNews = function() {
    getCreatePostTechNews.style.display = "none";
}

let onOffTopic = function() {
    getCreatePostOffTopic.style.display = "block";
}
let offOffTopic = function() {
    getCreatePostOffTopic.style.display = "none";
}

let onGmgymnastOfficial = function() {
    getCreatePostGmgymnastOfficial.style.display = "block";
}
let offGmgymnastOfficial = function() {
    getCreatePostGmgymnastOfficial.style.display = "none";
}

let onForumInformation = function() {
    getCreatePostForumInformation.style.display = "block";
}
let offForumInformation = function() {
    getCreatePostForumInformation.style.display = "none";
}

let onSection1All = function() {
    onGeneralDiscussion();
    onTechNews();
    onOffTopic();
    onGmgymnastOfficial();
    onForumInformation();
}

let offSection1All = function() {
    offGeneralDiscussion();
    offTechNews();
    offOffTopic();
    offGmgymnastOfficial();
    offForumInformation();
}

//Section 2

let onGraphicsCards = function() {
    getCreatePostGraphicsCards.style.display = "block";
}
let offGraphicsCards = function() {
    getCreatePostGraphicsCards.style.display = "none";
}

let onMotherboards = function() {
    getCreatePostMotherboards.style.display = "block";
}
let offMotherboards = function() {
    getCreatePostMotherboards.style.display = "none";
}

let onCasesPSU = function() {
    getCreatePostCasesPSU.style.display = "block";
}
let offCasesPSU = function() {
    getCreatePostCasesPSU.style.display = "none";
}

let onLiquidCooling = function() {
    getCreatePostLiquidCooling.style.display = "block";
}
let offLiquidCooling = function() {
    getCreatePostLiquidCooling.style.display = "none";
}

let onAirCooling = function() {
    getCreatePostAirCooling.style.display = "block";
}
let offAirCooling = function() {
    getCreatePostAirCooling.style.display = "none";
}

let onPeripherals = function() {
    getCreatePostPeripherals.style.display = "block";
}
let offPeripherals = function() {
    getCreatePostPeripherals.style.display = "none";
}

let onAudio = function() {
    getCreatePostAudio.style.display = "block";
}
let offAudio = function() {
    getCreatePostAudio.style.display = "none";
}

let onStorageDevices = function() {
    getCreatePostStorageDevices.style.display = "block";
}
let offStorageDevices = function() {
    getCreatePostStorageDevices.style.display = "none";
}

let onDisplays = function() {
    getCreatePostDisplays.style.display = "block";
}
let offDisplays = function() {
    getCreatePostDisplays.style.display = "none";
}

let onNetworking = function() {
    getCreatePostNetworking.style.display = "block";
}
let offNetworking = function() {
    getCreatePostNetworking.style.display = "none";
}

let onServersNAS = function() {
    getCreatePostServersNAS.style.display = "block";
}
let offServersNAS = function() {
    getCreatePostServersNAS.style.display = "none";
}

let onSection2All = function() {
    onGraphicsCards();
    onMotherboards();
    onCasesPSU();
    onLiquidCooling();
    onAirCooling();
    onPeripherals();
    onAudio();
    onStorageDevices();
    onDisplays();
    onNetworking();
    onServersNAS();
}

let offSection2All = function() {
    offGraphicsCards();
    offMotherboards();
    offCasesPSU();
    offLiquidCooling();
    offAirCooling();
    offPeripherals();
    offAudio();
    offStorageDevices();
    offDisplays();
    offNetworking();
    offServersNAS();
}

//Section 3

let onLookingForTeammates = function() {
    getCreatePostLookingForTeammates.style.display = "block";
}
let offLookingForTeammates = function() {
    getCreatePostLookingForTeammates.style.display = "none";
}

let onPCGaming = function() {
    getCreatePostPCGaming.style.display = "block";
}
let offPCGaming = function() {
    getCreatePostPCGaming.style.display = "none";
}

let onConsoleGaming = function() {
    getCreatePostConsoleGaming.style.display = "block";
}
let offConsoleGaming = function() {
    getCreatePostConsoleGaming.style.display = "none";
}

let onMobileGaming = function() {
    getCreatePostMobileGaming.style.display = "block";
}
let offMobileGaming = function() {
    getCreatePostMobileGaming.style.display = "none";
}

let onEsports = function() {
    getCreatePostEsports.style.display = "block";
}
let offEsports = function() {
    getCreatePostEsports.style.display = "none";
}

let onSection3All = function() {
    onLookingForTeammates();
    onPCGaming();
    onConsoleGaming();
    onMobileGaming();
    onEsports();
}

let offSection3All = function() {
    offLookingForTeammates();
    offPCGaming();
    offConsoleGaming();
    offMobileGaming();
    offEsports();
}

//Section 4

let onOperatingSystems = function() {
    getCreatePostOperatingSystems.style.display = "block";
}
let offOperatingSystems = function() {
    getCreatePostOperatingSystems.style.display = "none";
}

let onProgramming = function() {
    getCreatePostProgramming.style.display = "block";
}
let offProgramming = function() {
    getCreatePostProgramming.style.display = "none";
}

let onProgramsWebsitesApps = function() {
    getCreatePostProgramsWebsitesApps.style.display = "block";
}
let offProgramsWebsitesApps = function() {
    getCreatePostProgramsWebsitesApps.style.display = "none";
}

let onSection4All = function() {
    z
    onOperatingSystems();
    onProgramming();
    onProgramsWebsitesApps();
}

let offSection4All = function() {
    offOperatingSystems();
    offProgramming();
    offProgramsWebsitesApps();
}

//Section 1

let toggleNavGeneralDiscussion = function() {

    offSection1All();
    ToggleTechNewsPostStatus = false;
    ToggleOffTopicPostStatus = false;
    ToggleGmgymnastOfficialPostStatus = false;
    ToggleForumInformationPostStatus = false;

    if (ToggleGeneralDiscussionPostStatus === false) {
        onGeneralDiscussion();
        ToggleGeneralDiscussionPostStatus = true;

    } else if (ToggleGeneralDiscussionPostStatus === true) {
        offGeneralDiscussion();
        ToggleGeneralDiscussionPostStatus = false;
    }
}

let toggleNavTechNews = function() {

    offSection1All();
    ToggleGeneralDiscussionPostStatus = false;
    ToggleOffTopicPostStatus = false;
    ToggleGmgymnastOfficialPostStatus = false;
    ToggleForumInformationPostStatus = false;

    if (ToggleTechNewsPostStatus === false) {
        onTechNews();
        ToggleTechNewsPostStatus = true;

    } else if (ToggleTechNewsPostStatus === true) {
        offTechNews();
        ToggleTechNewsPostStatus = false;
    }
}

let toggleNavOffTopic = function() {

    offSection1All();
    ToggleGeneralDiscussionPostStatus = false;
    ToggleTechNewsPostStatus = false;
    ToggleGmgymnastOfficialPostStatus = false;
    ToggleForumInformationPostStatus = false;

    if (ToggleOffTopicPostStatus === false) {
        onOffTopic();
        ToggleOffTopicPostStatus = true;

    } else if (ToggleOffTopicPostStatus === true) {
        offOffTopic();
        ToggleOffTopicPostStatus = false;
    }
}

let toggleNavGmgymnastOfficial = function() {

    offSection1All();
    ToggleGeneralDiscussionPostStatus = false;
    ToggleTechNewsPostStatus = false;
    ToggleOffTopicPostStatus = false;
    ToggleForumInformationPostStatus = false;

    if (ToggleGmgymnastOfficialPostStatus === false) {
        onGmgymnastOfficial();
        ToggleGmgymnastOfficialPostStatus = true;

    } else if (ToggleGmgymnastOfficialPostStatus === true) {
        offGmgymnastOfficial();
        ToggleGmgymnastOfficialPostStatus = false;
    }
}

let toggleNavForumInformation = function() {

    offSection1All();
    ToggleGeneralDiscussionPostStatus = false;
    ToggleTechNewsPostStatus = false;
    ToggleOffTopicPostStatus = false;
    ToggleGmgymnastOfficialPostStatus = false;

    if (ToggleForumInformationPostStatus === false) {
        onForumInformation();
        ToggleForumInformationPostStatus = true;

    } else if (ToggleForumInformationPostStatus === true) {
        offForumInformation();
        ToggleForumInformationPostStatus = false;
    }
}

//Section 2

let toggleNavGraphicsCards = function() {

    offSection2All();
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleGraphicsCardsPostStatus === false) {
        onGraphicsCards();
        ToggleGraphicsCardsPostStatus = true;

    } else if (ToggleGraphicsCardsPostStatus === true) {
        offGraphicsCards();
        ToggleGraphicsCardsPostStatus = false;
    }
}

let toggleNavMotherboards = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleMotherboardsPostStatus === false) {
        onMotherboards();
        ToggleMotherboardsPostStatus = true;

    } else if (ToggleMotherboardsPostStatus === true) {
        offMotherboards();
        ToggleMotherboardsPostStatus = false;
    }
}

let toggleNavCasesPSU = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleCasesPSUPostStatus === false) {
        onCasesPSU();
        ToggleCasesPSUPostStatus = true;

    } else if (ToggleCasesPSUPostStatus === true) {
        offCasesPSU();
        ToggleCasesPSUPostStatus = false;
    }
}

let toggleNavLiquidCooling = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleLiquidCoolingPostStatus === false) {
        onLiquidCooling();
        ToggleLiquidCoolingPostStatus = true;

    } else if (ToggleLiquidCoolingPostStatus === true) {
        offLiquidCooling();
        ToggleLiquidCoolingPostStatus = false;
    }
}

let toggleNavAirCooling = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleAirCoolingPostStatus === false) {
        onAirCooling();
        ToggleAirCoolingPostStatus = true;

    } else if (ToggleAirCoolingPostStatus === true) {
        offAirCooling();
        ToggleAirCoolingPostStatus = false;
    }
}

let toggleNavPeripherals = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (TogglePeripheralsPostStatus === false) {
        onPeripherals();
        TogglePeripheralsPostStatus = true;

    } else if (TogglePeripheralsPostStatus === true) {
        offPeripherals();
        TogglePeripheralsPostStatus = false;
    }
}

let toggleNavAudio = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleAudioPostStatus === false) {
        onAudio();
        ToggleAudioPostStatus = true;

    } else if (ToggleAudioPostStatus === true) {
        offAudio();
        ToggleAudioPostStatus = false;
    }
}

let toggleNavStorageDevices = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleStorageDevicesPostStatus === false) {
        onStorageDevices();
        ToggleStorageDevicesPostStatus = true;

    } else if (ToggleStorageDevicesPostStatus === true) {
        offStorageDevices();
        ToggleStorageDevicesPostStatus = false;
    }
}

let toggleNavDisplays = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleNetworkingPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleDisplaysPostStatus === false) {
        onDisplays();
        ToggleDisplaysPostStatus = true;

    } else if (ToggleDisplaysPostStatus === true) {
        offDisplays();
        ToggleDisplaysPostStatus = false;
    }
}

let toggleNavNetworking = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleServersNASPostStatus = false;

    if (ToggleNetworkingPostStatus === false) {
        onNetworking();
        ToggleNetworkingPostStatus = true;

    } else if (ToggleNetworkingPostStatus === true) {
        offNetworking();
        ToggleNetworkingPostStatus = false;
    }
}

let toggleNavServersNAS = function() {

    offSection2All();
    ToggleGraphicsCardsPostStatus = false;
    ToggleMotherboardsPostStatus = false;
    ToggleCasesPSUPostStatus = false;
    ToggleLiquidCoolingPostStatus = false;
    ToggleAirCoolingPostStatus = false;
    TogglePeripheralsPostStatus = false;
    ToggleAudioPostStatus = false;
    ToggleStorageDevicesPostStatus = false;
    ToggleDisplaysPostStatus = false;
    ToggleNetworkingPostStatus = false;

    if (ToggleServersNASPostStatus === false) {
        onServersNAS();
        ToggleServersNASPostStatus = true;

    } else if (ToggleServersNASPostStatus === true) {
        offServersNAS();
        ToggleServersNASPostStatus = false;
    }
}

//Section 3

let toggleNavLookingForTeammates = function() {

    offSection3All();
    TogglePCGamingPostStatus = false;
    ToggleConsoleGamingPostStatus = false;
    ToggleMobileGamingPostStatus = false;
    ToggleEsportsPostStatus = false;

    if (ToggleLookingForTeammatesPostStatus === false) {
        onLookingForTeammates();
        ToggleLookingForTeammatesPostStatus = true;

    } else if (ToggleLookingForTeammatesPostStatus === true) {
        offLookingForTeammates();
        ToggleLookingForTeammatesPostStatus = false;
    }
}

let toggleNavPCGaming = function() {

    offSection3All();
    ToggleLookingForTeammatesPostStatus = false;
    ToggleConsoleGamingPostStatus = false;
    ToggleMobileGamingPostStatus = false;
    ToggleEsportsPostStatus = false;

    if (TogglePCGamingPostStatus === false) {
        onPCGaming();
        TogglePCGamingPostStatus = true;

    } else if (TogglePCGamingPostStatus === true) {
        offPCGaming();
        TogglePCGamingPostStatus = false;
    }
}

let toggleNavConsoleGaming = function() {

    offSection3All();
    ToggleLookingForTeammatesPostStatus = false;
    TogglePCGamingPostStatus = false;
    ToggleMobileGamingPostStatus = false;
    ToggleEsportsPostStatus = false;

    if (ToggleConsoleGamingPostStatus === false) {
        onConsoleGaming();
        ToggleConsoleGamingPostStatus = true;

    } else if (ToggleConsoleGamingPostStatus === true) {
        offConsoleGaming();
        ToggleConsoleGamingPostStatus = false;
    }
}

let toggleNavMobileGaming = function() {

    offSection3All();
    ToggleLookingForTeammatesPostStatus = false;
    TogglePCGamingPostStatus = false;
    ToggleConsoleGamingPostStatus = false;
    ToggleEsportsPostStatus = false;

    if (ToggleMobileGamingPostStatus === false) {
        onMobileGaming();
        ToggleMobileGamingPostStatus = true;

    } else if (ToggleMobileGamingPostStatus === true) {
        offMobileGaming();
        ToggleMobileGamingPostStatus = false;
    }
}

let toggleNavEsports = function() {

    offSection3All();
    ToggleLookingForTeammatesPostStatus = false;
    TogglePCGamingPostStatus = false;
    ToggleConsoleGamingPostStatus = false;
    ToggleMobileGamingPostStatus = false;

    if (ToggleEsportsPostStatus === false) {
        onEsports();
        ToggleEsportsPostStatus = true;

    } else if (ToggleEsportsPostStatus === true) {
        offEsports();
        ToggleEsportsPostStatus = false;
    }
}

//Section 4

let toggleNavOperatingSystems = function() {

    offSection4All();
    ToggleProgrammingPostStatus = false;
    ToggleProgramsWebsitesAppsPostStatus = false;

    if (ToggleOperatingSystemsPostStatus === false) {
        onOperatingSystems();
        ToggleOperatingSystemsPostStatus = true;

    } else if (ToggleOperatingSystemsPostStatus === true) {
        offOperatingSystems;
        ToggleOperatingSystemsPostStatus = false;
    }
}

let toggleNavProgramming = function() {

    offSection4All();
    ToggleOperatingSystemsPostStatus = false;
    ToggleProgramsWebsitesAppsPostStatus = false;

    if (ToggleProgrammingPostStatus === false) {
        onProgramming();
        ToggleProgrammingPostStatus = true;

    } else if (ToggleProgrammingPostStatus === true) {
        offProgramming();
        ToggleProgrammingPostStatus = false;
    }
}

let toggleNavProgramsWebsitesApps = function() {

    offSection4All();
    ToggleOperatingSystemsPostStatus = false;
    ToggleProgrammingPostStatus = false;

    if (ToggleProgramsWebsitesAppsPostStatus === false) {
        onProgramsWebsitesApps();
        ToggleProgramsWebsitesAppsPostStatus = true;

    } else if (ToggleProgramsWebsitesAppsPostStatus === true) {
        offProgramsWebsitesApps();
        ToggleProgramsWebsitesAppsPostStatus = false;
    }
}

//Whole Section Drop Down

let toggleTheHub1DropDownArrow = function() {

    if (ToggleTheHub1DropDownArrow === true) {
        getFirstExcludeHeader.style.display = "none";
        ToggleTheHub1DropDownArrow = false;

    } else if (ToggleTheHub1DropDownArrow === false) {
        getFirstExcludeHeader.style.display = "block";
        ToggleTheHub1DropDownArrow = true;
    }
}

let toggleTheHub2DropDownArrow = function() {

    if (ToggleTheHub2DropDownArrow === true) {
        getSecondExcludeHeader.style.display = "none";
        ToggleTheHub2DropDownArrow = false;

    } else if (ToggleTheHub2DropDownArrow === false) {
        getSecondExcludeHeader.style.display = "block";
        ToggleTheHub2DropDownArrow = true;
    }
}

let toggleTheHub3DropDownArrow = function() {

    if (ToggleTheHub3DropDownArrow === true) {
        getThirdExcludeHeader.style.display = "none";
        ToggleTheHub3DropDownArrow = false;

    } else if (ToggleTheHub3DropDownArrow === false) {
        getThirdExcludeHeader.style.display = "block";
        ToggleTheHub3DropDownArrow = true;
    }
}

let toggleTheHub4DropDownArrow = function() {

    if (ToggleTheHub4DropDownArrow === true) {
        getFourthExcludeHeader.style.display = "none";
        ToggleTheHub4DropDownArrow = false;

    } else if (ToggleTheHub4DropDownArrow === false) {
        getFourthExcludeHeader.style.display = "block";
        ToggleTheHub4DropDownArrow = true;
    }
}

let toggleTheHub5DropDownArrow = function() {

    if (ToggleTheHub5DropDownArrow === true) {
        getFifthExcludeHeader.style.display = "none";
        ToggleTheHub5DropDownArrow = false;

    } else if (ToggleTheHub5DropDownArrow === false) {
        getFifthExcludeHeader.style.display = "block";
        ToggleTheHub5DropDownArrow = true;
    }
}