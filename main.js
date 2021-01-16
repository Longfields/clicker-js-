try {
                //{
                id = (el) => document.getElementById(el);
                cls = (el) => document.getElementsByClassName(el);
                tag = (el) => document.getElementsByTagName(el);
                //} // simplify
                
                //{
                let saveCode = [0, 1, 0, false, 0, false, 1, 0, true, 0, 0, 0, 1, false, false, false, false, false, 0, 1, 1, 1, 1, 5, true];
                let winGame = saveCode[3];
                let timeSince = 0;
                let comingBack = saveCode[5];
                let game_started = false;
                let timeCode = [];
                
                // stats object
                let stats = {
                    money: saveCode[0],
                    mpc: saveCode[1],
                    mps: saveCode[2],
                };
                
                // upgrade helper functions
                let upgrades = {
                    upgradeMPC(amount) {
                        return stats.mpc += amount;
                    },
                    upgradeMPS(amount) {
                        return stats.mps += amount;
                    }
                }; 
                
                // actual upgrades
                /*let shopgrades = [
                    {
                        title: "Basic <span style='color:#1976D2;'>MPC</span>",
                        cost: 10,
                        _mpcPlus: 1,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "Sophisticated <span style='color:#1976D2;'>MPC</span>",
                        cost: 50,
                        _mpcPlus: 5,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Ultra <span style='color:#1976D2;'>MPC</span>",
                        cost: 100,
                        _mpcPlus: 10,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Pro <span style='color:#1976D2;'>MPC</span>",
                        cost: 200,
                        _mpcPlus: 20,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Wizard <span style='color:#1976D2;'>MPC</span>",
                        cost: 1000,
                        _mpcPlus: 100,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Black Hole <span style='color:#1976D2;'>MPC</span>",
                        cost: 5000,
                        _mpcPlus: 500,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Basic <span style='color: #00695C;'>MPS</span>",
                        cost: 500,
                        _mpcPlus: 0,
                        _mpsPlus: 1,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Cool <span style='color: #00695C;'>MPS</span>",
                        cost: 1000,
                        _mpcPlus: 0,
                        _mpsPlus: 2,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Mega <span style='color: #00695C;'>MPS</span>",
                        cost: 4000,
                        _mpcPlus: 0,
                        _mpsPlus: 4,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Rich <span style='color: #00695C;'>MPS</span>",
                        cost: 10000,
                        _mpcPlus: 0,
                        _mpsPlus: 20,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "<span style='color: #5E35B1;'>Hybrid</span> Basic",
                        cost: 1500,
                        _mpcPlus: 15,
                        _mpsPlus: 15,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "<span style='color: #5E35B1;'>Hybrid</span> Ultra",
                        cost: 20000,
                        _mpcPlus: 1000,
                        _mpsPlus: 40,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "<span style='color: #5E35B1;'>Hybrid</span> Super",
                        cost: 50000,
                        _mpcPlus: 5000,
                        _mpsPlus: 100,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Basic <span style='color: #AD1457;'>Worker</span>",
                        cost: 250000,
                        _mpcPlus: 0,
                        _mpsPlus: 1000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "Super <span style='color: #AD1457;'>Worker</span>",
                        cost: 1000000,
                        _mpcPlus: 0,
                        _mpsPlus: 4000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "<span style='color: #fff;background:black;padding:0 5px;'>Web Developer</span>",
                        cost: 2000000,
                        _mpcPlus: 1,
                        _mpsPlus: 8000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "<span style='color: #fff;background:black;padding:0 5px;'>Full Stack Developer</span>",
                        cost: 5000000,
                        _mpcPlus: 2,
                        _mpsPlus: 20000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        }
                    },
                    {
                        title: "<span style='color:#333;background:#fff;border:2px solid #333;padding:0 15px;border-radius:50px;'>HACKER 🐱‍💻</span>",
                        cost: 1000000000,
                        _mpcPlus: Infinity,
                        _mpsPlus: Infinity,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                            
                            winGame = true;
                            saveCode[3] = true;
                        }
                    },
                ]; */
                let shopgrades = [
                    {
                        title: "<span style='color: #616161;'>Common Energy</span>",
                        cost: 10,
                        _mpcPlus: 1,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: #616161;'>Static</span>",
                        cost: 50,
                        _mpcPlus: 5,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: #558B2F;'>Bolt X</span>",
                        cost: 100,
                        _mpcPlus: 10,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: #616161;'>Tiny Helper</span>",
                        cost: 250,
                        _mpcPlus: 0,
                        _mpsPlus: 1,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: #558B2F;'>Lazy Worker</span>",
                        cost: 500,
                        _mpcPlus: 0,
                        _mpsPlus: 2,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: #558B2F;'>Hard Worker</span>",
                        cost: 1200,
                        _mpcPlus: 0,
                        _mpsPlus: 5,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: #0277BD'>Hybrid Workforce</span>",
                        cost: 2000,
                        _mpcPlus: 25,
                        _mpsPlus: 10,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: #0277BD'>Lightning Cannon</span>",
                        cost: 2000,
                        _mpcPlus: 50,
                        _mpsPlus: 0,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(189, 149, 19);'>Super Charge</span>",
                        cost: 5000,
                        _mpcPlus: 0,
                        _mpsPlus: 50,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(189, 149, 19);'>Tesla Coil</span>",
                        cost: 10000,
                        _mpcPlus: 10,
                        _mpsPlus: 100,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(189, 149, 19);'>Hyrdo Dam</span>",
                        cost: 50000,
                        _mpcPlus: 0,
                        _mpsPlus: 1000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(189, 149, 19);'>Solar Windmill</span>",
                        cost: 25000,
                        _mpcPlus: 0,
                        _mpsPlus: 500,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(166, 35, 64);'>Power Cannon</span>",
                        cost: 100000,
                        _mpcPlus: 1000,
                        _mpsPlus: 1500,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(166, 35, 64);'>Mystic Energy</span>",
                        cost: 500000,
                        _mpcPlus: 6000,
                        _mpsPlus: 6000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(166, 35, 64);'>Rich Millionare</span>",
                        cost: 1000000,
                        _mpcPlus: 12500,
                        _mpsPlus: 12500,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(166, 35, 64);'>Programmer 😎</span>",
                        cost: 2000000,
                        _mpcPlus: 30000,
                        _mpsPlus: 20000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(255, 255, 255);background:rgb(66, 66, 66);padding:2px 9px;'>Wizard 🧙</span>",
                        cost: 10000000,
                        _mpcPlus: 30000,
                        _mpsPlus: 20000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(255, 255, 255);background:rgb(66, 66, 66);padding:2px 9px;'>ALIEN 👽</span>",
                        cost: 50000000,
                        _mpcPlus: 100000,
                        _mpsPlus: 50000,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                        },
                    },
                    {
                        title: "<span style='color: rgb(255, 255, 255);background:rgb(59, 59, 59);padding:2px 9px;'>HACKER ✨</span>",
                        cost: 100000000,
                        _mpcPlus: Infinity,
                        _mpsPlus: Infinity,
                        onceBought() {
                            upgrades.upgradeMPC(this._mpcPlus);
                            upgrades.upgradeMPS(this._mpsPlus);
                            
                            winGame = true;
                            saveCode[3] = true;
                        },
                    },
                ]; 
                
                let lead_a = [];
                let banned_lead = [];
                
                let toastInner = "Snackbar!";
                //} // global variables
                
                //{
                randomNum = (min, max) => Math.floor(Math.random() * ( Math.floor(max) - Math.ceil(min)) + Math.ceil(min)); // random num. functions [helper]
                
                switchScene = (index) => {
                    //window.scroll(0, 0); 
                    for (let scene = 0; scene <  cls("scene").length; scene++) {
                        cls("scene")[scene].style.display = "none";
                    }
                    
                    cls("scene")[index].style.display = "block";
                } // scene switch function [helper]
                
                toast = (timeU = 1000) => {
                    let toastEl = id("toast-el");
                    toastEl.className = "visible";
                    toastEl.innerHTML = toastInner;
                    setTimeout(()  => {
                        toastEl.className = toastEl.className.replace("visible", "");
                    }, timeU);
                } // toast "component" [helper]
                
                gamble = (amount = 0) => {
                    let coin = Math.floor(Math.random() * 2);
                    if (coin === 0) {
                        stats.money = 0;
                    } else {
                        stats.money += amount;
                    }
                } // gamble function [helper]

                toDot = (txt, max, ellipsis) => {
                    return txt.slice(0, max) + (((txt.length > max) && ellipsis) ? "..." : "");
                } // ellipsis function [helper]
                
                formatDate = (dateString) => {
                    const options = { year: "numeric", month: "long", day: "numeric" }
                    return new Date(dateString).toLocaleDateString(undefined, options)
                }
                
                
                
                let timeSince_array = Array.from(String(timeSince), Number);
                randomString = (len, charSet) => {
                    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomString = [];
                    //Array.prototype.push.apply(tt, randomString);
                    randomString += "leaderboard ";
                    for (let i = 0; i < len; i++) {
                        let randomPoz = Math.floor(Math.random() * charSet.length);
                        randomString += charSet.substring(randomPoz, randomPoz+1);
                    }
                    for (let j = 0; j < timeSince_array.length/timeSince.toString().length; j++) {
                        randomString += timeSince;
                        //randomString[Math.floor(Math.random()*randomString.length)].push('3');
                    }
                    //randomString[0] = 3;
                    return randomString;
                }
                
                shuffle = (array) => {
                    var m = array.length, t, i;
                    while (m) {
                        i = Math.floor(Math.random() * m--);
                        t = array[m];
                        array[m] = array[i];
                        array[i] = t;
                    }
                    return array;
                }
                
                //} // helper functions
                
                startGame = () => {game_started=true;}
                
                // update user stats
                updateStats = () => {
                    id("mpc-con").innerHTML = `$${stats.mpc.toLocaleString()}`;
                    id("mps-con").innerHTML = `$${stats.mps.toLocaleString()}`;
                    id("pts-con").innerHTML = `$${stats.money.toLocaleString()}`;
                    id("shop-money-reminder").innerHTML = `$${stats.money.toLocaleString()}`;
                }
                
                // check for bet btn click
                id("bet-button").addEventListener("click", () => {
                    if (!isNaN(parseInt(id("bet-input").value))) {
                        if (stats.money >= 10000) {
                            if (parseInt(id("bet-input").value) >= 10000) {
                                toastInner = "Amount too high";
                                toast();
                            } else if (parseInt(id("bet-input").value) <= 99) {
                                toastInner = "Amount too low";
                                toast();
                            } else {
                                gamble(parseInt(id("bet-input").value));
                            }
                            updateStats();
                        } else {
                            toastInner = "You dont have enough money to gamble";
                            toast();
                        }
                    } else {
                        toastInner = "Please input a number 🙄";
                        toast();
                    }
                });

                
                // start timer
                startTimer = () => {
                    timeSince++;
                    let hours = Math.floor(timeSince / 3600);
                    let minutes = Math.floor((timeSince - hours * 3600) / 60);
                    let seconds = timeSince - (hours * 3600 + minutes * 60);
                    if (hours < 10) {hours = "0" + hours;}
                    if (minutes < 10) {minutes = "0" + minutes;}
                    if (seconds < 10) {seconds = "0" + seconds;}
                    id("time-con").innerHTML = hours + ":" + minutes + ":" + seconds;
                }
                
                // check win
                
                timeCode.push("");
                checkWin = () => {
                    if (winGame === true) {
                        switchScene(5);
                        //id("time-code").innerHTML = timeCode;
                    }
                }
                
                
                // check for click on power button
                id("theBtn").addEventListener("click", function() {
                    stats.money += stats.mpc;
                    updateStats();
                });
                
                // money++
                incrementMoney = () => {
                    stats.money += stats.mps;
                    updateStats();
                }
                
                // shop
                shop = () => {
                    let shopDiv = id("shop-shops");
                    
                    for (let i = 0; i < shopgrades.length; i++) {
                        shopgrades.sort(function (a, b) {
                            return a.cost - b.cost;
                        })
                        
                        let _newItemDiv = document.createElement("div");
                        _newItemDiv.innerHTML = `
                            <div class="shopgrade">
                                <h4>
                                    ${shopgrades[i].title}
                                    <span style="float: right;">$${shopgrades[i].cost.toLocaleString()}</span>
                                </h4>
                                
                                <p style='font-size: 13px;margin-top: -15px;color:#616161;'>+${shopgrades[i]._mpcPlus.toLocaleString()} MPC | +${shopgrades[i]._mpsPlus.toLocaleString()} MPS</p>
                            </div>
                        `;
                        
                        _newItemDiv.addEventListener("click", function() {
                            if (stats.money >= shopgrades[i].cost) {
                                stats.money -= shopgrades[i].cost;
                                shopgrades[i].onceBought();
                                
                                toastInner = "Successfully bought 🎉";
                                toast();
                                
                                checkWin();
                            } else {
                                toastInner = "Not enough money 😑";
                                toast();
                            }
                        });
                        shopDiv.appendChild(_newItemDiv);
                    }
                }

                let dialog = document.querySelector(".dialog");
                let dialogTrigger = document.querySelector(".dialog-trigger");
                let closeButton = document.querySelector(".close-button");
    
                toggledialog = () => dialog.classList.toggle("show-dialog");
                windowOnClick = (event) => {
                    if (event.target === dialog) toggledialog();
                }
                
                dialogTrigger.addEventListener("click", toggledialog);
                closeButton.addEventListener("click", toggledialog);
                window.addEventListener("click", windowOnClick);
            
                
                id("leaderboard").innerHTML = 'Loading Leaderboard...';
                lead = () => {
                    let createScript = document.createElement("script");
                    createScript.setAttribute("src", "https://www.khanacademy.org/api/internal/discussions/ag5zfmtoYW4tYWNhZGVteXJACxIIVXNlckRhdGEiHWthaWRfNTUzNjU2NDc5MjU4ODc5NjIyMzM5Mjc2DAsSCEZlZWRiYWNrGICAnfP4l4oKDA/replies?callback=injectAPI&\x5f&format=pretty" + Date.now());
                    document.body.appendChild(createScript);
                }
                injectAPI = (data) => {
                    id("leaderboard").innerHTML = ''; // credit to JettBurns@JettBurns14 for this line
                    lead_a = [];
                    
                    for (let i in data) {
                        /*let comment_content = data[i].content;
                        let regexp_data = new RegExp(/\d/g);
                        let finalScore = comment_content.match(regexp_data).join("");*/
                        
                        let finalScore = data[i].content.match(/\d/g).join("");
                        let finalUser = toDot(data[i].authorNickname, 10, true);
                        
                        if (data[i].content.match(/^leaderboard\W/)) {
                            lead_a.push({
                                user: finalUser,
                                score: finalScore,
                                posted: formatDate(data[i].date),
                                avatarSrc: data[i].authorAvatarSrc,
                            });
                        }
                    }
                    
                    for (let j in lead_a) {
                        lead_a.sort(function (a, b) {
                            return a.score - b.score;
                        });
                        id("leaderboard").innerHTML += `
                            <div class='lead-con'>
                                <div style='position:absolute;top:10px;left:22px;'>
                                    <p style='color:#616161;font-size:11px;text-transform:uppercase;font-weight:500;letter-spacing:.5px;'>#${parseInt(j)+1}</p>
                                </div>
                                
                                <div style='display: flex;justify-content:space-between;margin-top:18px;'>
                                    <h4>
                                        <img src=${lead_a[j].avatarSrc}>
                                        <span id='ld-user'>${lead_a[j].user}</span>
                                    </h4>
                                    
                                    <h4 style='align-self: center;'>
                                        <span>${lead_a[j].score}</span>
                                    </h4>
                                </div>
                                
                                <div style='position:absolute;top:10px;right:10px;'>
                                    <p style='color:#616161;font-size:11px;text-transform:uppercase;font-weight:500;letter-spacing:.5px;'>${lead_a[j].posted}</p>
                                </div>
                            </div>
                        `;
                    }
                };
                
                updateStats();
                switchScene(0);
                shop();

                setInterval(lead, 10);
                
                //let ram = Array.from(randomString(10));                
                saveCode[4] = randomString(5);

                setInterval(() => {
                    incrementMoney();
                    if (game_started) {
                        startTimer();
                    }
                    checkWin();
                    
                    updateStats();
    
                    //id("time-code").innerHTML = `<code>${saveCode[4]}</code>`;
                }, 1000);
                //shuffle(ram);
                id("time-code").innerHTML = `<code>${saveCode[4]}</code>`;
            
                if (comingBack === true) {
                    toastInner = "Welcome back 👍";
                    toast(1000);
                }

                
                document.body.addEventListener("keydown", event => {
                    if (event.code === "KeyS") {
                        alert(game_started);
                    }
                });

                saveNow = () => {
                    saveCode[0] = stats.money;
                    saveCode[1] = stats.mpc;
                    saveCode[2] = stats.mps;
                    saveCode[3] = winGame;
                    saveCode[4] = timeSince;
                    saveCode[5] = comingBack;              
                    
                    alert(saveCode);
                }
            } catch(e){
                document.body.innerHTML = e;
            }
