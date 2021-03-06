"use strict";
import { ScoreboardManager } from "./ScoreboardManager.js";
import { MagnifierManager } from "./MagnifierManager.js";
import { DoctorManager } from "./DoctorManager.js";
import { GameStatusNotification } from "./GameStatusNotification.js";
import { BackgroundManager } from "./BackgroundManager.js";
import { LevelInfoManager } from "./LevelInfoManager.js";

const UIManager = class UIManager {
    constructor(gameContainer) {
        this.gameContainer = gameContainer;
        this.backgroundPattern = document.getElementById("background-pattern");

        this.ScoreboardManager = new ScoreboardManager(document.getElementById("scoreboard-container"));
        this.MagnifierManager = new MagnifierManager(document.getElementById("magnifier-container"));
        this.DoctorManager = new DoctorManager(document.getElementById("doctor-animation"));
        this.GameStatusNotification = new GameStatusNotification(document.getElementById("game-info"));
        this.BackgroundManager = new BackgroundManager(document.getElementById("background-pattern"));
        this.LevelInfoManager = new LevelInfoManager(document.getElementById("info-container"));
    }

    prepareUI = () => {
        this.ScoreboardManager.initializeScoreboard();
    };
};

export { UIManager };
