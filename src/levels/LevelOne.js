import React from "react";
import { Dimensions } from "react-native";
import Matter from "matter-js";
import Barrier from "../entities/Barrier";
import LevelOneGround from "../entities/LevelOneGround";
import Mario from "../entities/Mario";
import QuestionBox from "../entities/QuestionBox";

const HEIGHT = 320;

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

const { width, height } = Dimensions.get("window");
const cx = width / 2;
const cy = height / 2;
const offsetY = (height - HEIGHT) / 2;
const platformHeight = 20;
const platformWidth = Math.min(width, 430);
const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;
world.gravity = { x: 0, y: 8 };

export default {
  physics: { engine: engine, world: world },
  questionBox1: QuestionBox(world, { x: cx + 20, y: HEIGHT - 100 }),
  ground: LevelOneGround(world, [0, offsetY + HEIGHT], width * 2),
  mario: Mario(world, [35, offsetY + HEIGHT - platformHeight / 2 - 20]),
  camera: { offsetX: 0 },
  barrier1: Barrier(world, { x: 0, y: cy }, height)
};