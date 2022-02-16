# ECS Engine

> Please note that this is a work in progress project. The contents of this library are subject to change at any point and should not be used for commercial use. A proof of concept application is available [here](https://tomchamberlainuk.github.io/ecs-demo-space-shooter/)

## A Game Engine Framework for the Web

This library provides a simple yet flexible framework for developing games for the web using JavaScript and WebGL. This framework is built using an ECS (Entity Component System) that provides a flexible modular design that speeds up the creation process.

## What is an ECS?

An ECS (Entity Component System) is a modern, functional approach to game engine design that attempts to solve some of the known problems in the traditional OOP (Object Orientated Programming) principles of inheritance.

## How Does the Engine Work?

### Entities

An entity is just a reference to a collection of data. It could be a rock, an enemy spaceship, or the player controller.

### Components

Components are the building blocks of an entity. They hold the necessary data for representing certain aspects of an entity, such as a sprite or the color of a particle.

### Systems

Systems are what brings the data to life. They cycle through all the entities in a scene, find entities that have the required components, and manipulate the data to achieve certain interactions such as a change of position or the dealing of damage.

## Docs

Comprehensive documentation is available [here](https://tomchamberlainuk.github.io/ecs-engine/)