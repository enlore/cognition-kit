#!/usr/bin/env node

"use strict"
require("colors")
const path          = require("path")
    , exec          = require("child_process").exec

const commander     = require("commander")
    , ncp           = require("ncp")

commander
    .version(require("../package.json").version)
    .command("setup", "Set up directory structure and files, pull down deps via npm")
    .option("-s, --stanky", "Set the stank level")
    .action((cmd, opts) => {
        const projectRoot = path.resolve(process.cwd()) // dump it wherever the script is called from
        const localTree   = path.resolve(__dirname, "..", "project")

        console.log()

        ncp(localTree, projectRoot, (err) => {
            if (err) throw err
            console.log("~~~~~~ _ > Time to install the dependencies".green)

            const npmInstall = exec("npm install")

            npmInstall
                .stderr.pipe(process.stderr)

            npmInstall
                .stdout.pipe(process.stdout)

            npmInstall.on("exit", (exitCode, sigName) => {
                if (exitCode === 0) {
                    console.log("~~~~~~ _ > Alright, now make something cool.".blue)
                } else {
                    let msg = "Non zero exit code: " + exitCode
                    console.log(msg.red)
                }

                if (sigName) {
                    let msg = "Stopped by a terminal signal: " + sigName
                    console.log(msg.orange)
                }
            })
        })
    })

commander
    .parse(process.argv)

if (commander.args.length === 0) commander.help()
