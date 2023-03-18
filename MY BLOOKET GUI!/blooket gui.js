;(() => {
  let _0x298968 = document.createElement('iframe')
  document.body.append(_0x298968)
  window.alert = _0x298968.contentWindow.alert.bind(window)
  window.prompt = _0x298968.contentWindow.prompt.bind(window)
  window.confirm = _0x298968.contentWindow.confirm.bind(window)
  _0x298968.remove()
})()
;(() => {
  let _0x1e3e54 = document.createElement('style')
  _0x1e3e54.innerHTML =
    'details > summary {\n    cursor: pointer;\n    transition: 0.15s;\n    list-style: none;\n}\ndetails > summary:hover {\n    color: hsl(0, 0%, 50%)\n}\ndetails > summary::-webkit-details-marker {\n    display: none;\n}\ndetails summary ~ * {\n    animation: sweep .5s ease-in-out;\n}\n\n@keyframes sweep {\n    0%    {opacity: 0; transform: translateY(-10px)}\n    100%  {opacity: 1; transform: translateY(0)}\n}\n.cheat {\n    border: none;\n    background: hsl(187, 100%, 40%);\n    padding: 5px;\n    margin: 3px;\n    width: 60%;\n    color: hsl(0, 0%, 100%);\n    transition: 0.2s;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.cheat:hover {\n    background: hsl(0, 0%, 30%);\n}'
  const _0x199ce5 = document.createElement('div')
  _0x199ce5.appendChild(_0x1e3e54)
  _0x199ce5.style.width = '400px'
  _0x199ce5.style.background = 'hsl(272, 61%, 34%)'
  _0x199ce5.style.borderRadius = '10px'
  _0x199ce5.style.position = 'absolute'
  _0x199ce5.style.textAlign = 'center'
  _0x199ce5.style.fontFamily = 'Nunito'
  _0x199ce5.style.color = 'white'
  _0x199ce5.style.overflow = 'hidden'
  _0x199ce5.style.top = '50px'
  _0x199ce5.style.left = '50px'
  var _0xb757b7 = 0,
    _0x4525fc = 0,
    _0x4eb310 = 0,
    _0x46f4b5 = 0
  _0x199ce5.onmousedown = (_0x12b430 = window.event) => {
    _0x12b430.preventDefault()
    _0x4eb310 = _0x12b430.clientX
    _0x46f4b5 = _0x12b430.clientY
    document.onmouseup = () => {
      document.onmouseup = null
      document.onmousemove = null
    }
    document.onmousemove = (_0x183142) => {
      _0x183142 = _0x183142 || window.event
      _0x183142.preventDefault()
      _0xb757b7 = _0x4eb310 - _0x183142.clientX
      _0x4525fc = _0x46f4b5 - _0x183142.clientY
      _0x4eb310 = _0x183142.clientX
      _0x46f4b5 = _0x183142.clientY
      _0x199ce5.style.top = _0x199ce5.offsetTop - _0x4525fc + 'px'
      _0x199ce5.style.left = _0x199ce5.offsetLeft - _0xb757b7 + 'px'
    }
  }
  let _0x279e60 = document.createElement('div')
  _0x199ce5.appendChild(_0x279e60)
  _0x279e60.style.width = '100%'
  _0x279e60.style.height = '35px'
  _0x279e60.style.paddingTop = '2px'
  _0x279e60.style.fontSize = '1.5rem'
  _0x279e60.style.textAlign = 'center'
  _0x279e60.innerHTML =
    'Blooket Gui <span style="font-size: 0.75rem">v4.15.25</span>'
  let _0x336148,
    _0x386adc = document.createElement('button')
  _0x279e60.appendChild(_0x386adc)
  _0x386adc.style.background = 'red'
  _0x386adc.style.height = '45px'
  _0x386adc.style.width = '45px'
  _0x386adc.style.border = 'none'
  _0x386adc.style.cursor = 'pointer'
  _0x386adc.style.position = 'absolute'
  _0x386adc.style.top = '-10px'
  _0x386adc.style.right = '-10px'
  _0x386adc.style.fontSize = '1.5rem'
  _0x386adc.style.borderRadius = '10px'
  _0x386adc.style.fontFamily = 'Nunito'
  _0x386adc.style.fontWeight = 'bolder'
  _0x386adc.style.paddingTop = '10px'
  _0x386adc.style.paddingRight = '15px'
  _0x386adc.innerText = 'X'
  _0x386adc.onclick = () => {
    _0x199ce5.remove()
    clearInterval(_0x336148)
    removeEventListener('keypress', _0x5cd842)
  }
  let _0x53cad2 = document.createElement('button')
  _0x279e60.appendChild(_0x53cad2)
  _0x53cad2.style.background = '#444444'
  _0x53cad2.style.height = '45px'
  _0x53cad2.style.width = '45px'
  _0x53cad2.style.border = 'none'
  _0x53cad2.style.cursor = 'pointer'
  _0x53cad2.style.position = 'absolute'
  _0x53cad2.style.top = '-10px'
  _0x53cad2.style.left = '-10px'
  _0x53cad2.style.fontSize = '1.5rem'
  _0x53cad2.style.borderRadius = '10px'
  _0x53cad2.style.fontFamily = 'P'
  _0x53cad2.style.fontWeight = 'bolder'
  _0x53cad2.style.paddingTop = '10px'
  _0x53cad2.style.paddingLeft = '15px'
  _0x53cad2.innerText = '-'
  _0x53cad2.onclick = () => {
    _0x4b6168.hidden = !_0x4b6168.hidden
  }
  let _0x4b6168 = document.createElement('div'),
    _0x11d291 = document.createElement('div')
  _0x4b6168.appendChild(_0x11d291)
  _0x199ce5.appendChild(_0x4b6168)
  _0x11d291.innerHTML =
    '<span id="curPageEl">' +
    (_0x31024b(true)
      ? 'Current gamemode: ' + _0x31024b(true)
      : 'No game detected') +
    '</span><br><span>(Press E to hide)</span><br>'
  _0x11d291.style.display = 'block'
  _0x11d291.style.margin = '10px'
  _0x11d291.style.minHeight = '70px'
  let _0x506666 = document.createElement('span')
  _0x11d291.appendChild(_0x506666)
  document.body.append(_0x199ce5)
  let _0x50f123 = document.createElement('div')
  _0x4b6168.appendChild(_0x50f123)
  _0x50f123.style.fontSize = '0.9rem'
  _0x50f123.style.paddingBottom = '5px'
  _0x50f123.innerHTML =
    '<span>GUI by 5pn#9999<br>Cheats by <a style="color: lightblue" href="https://youtube.com/@5p_n">$eniors</a></span>'
  var _0x52e1f9 = () =>
      new Promise((_0x16ddd9, _0x58cf40) => {
        try {
          let _0x4e77e9 = window.webpackJsonp
            .map((_0x346240) =>
              Object.keys(_0x346240[1]).map(
                (_0x385525) => _0x346240[1][_0x385525]
              )
            )
            .reduce((_0x2b512d, _0xb4af7f) => [..._0x2b512d, ..._0xb4af7f], [])
            .find(
              (_0x1cdab6) =>
                /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(_0x1cdab6.toString()) &&
                /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(
                  _0x1cdab6.toString()
                )
            )
            .toString()
          _0x16ddd9({
            blooketBuild: _0x4e77e9.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
            secret: _0x4e77e9.match(
              /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/
            )[1],
          })
        } catch {
          _0x58cf40('Could not fetch auth details')
        }
      }),
    _0x225843 = async (_0x1ee7bf, _0x387f19) => {
      let _0x26c6ca = window.crypto.getRandomValues(new Uint8Array(12))
      return window.btoa(
        Array.from(_0x26c6ca)
          .map((_0x38f8cd) => String.fromCharCode(_0x38f8cd))
          .join('') +
          Array.from(
            new Uint8Array(
              await window.crypto.subtle.encrypt(
                {
                  name: 'AES-GCM',
                  iv: _0x26c6ca,
                },
                await window.crypto.subtle.importKey(
                  'raw',
                  await window.crypto.subtle.digest(
                    'SHA-256',
                    new TextEncoder().encode(_0x387f19)
                  ),
                  { name: 'AES-GCM' },
                  false,
                  ['encrypt']
                ),
                new TextEncoder().encode(JSON.stringify(_0x1ee7bf))
              )
            )
          )
            .map((_0xfd861b) => String.fromCharCode(_0xfd861b))
            .join('')
      )
    }
  function _0x16e7b1() {
    return Object.values(document.querySelector('#app > div > div'))[1]
      .children[1]['_owner']
  }
  let _0x192807,
    _0xa70a5b,
    _0x432de6,
    _0x5b935a,
    _0x5d1bc4,
    _0x3bf5ea = {
      global: {
        'Get Daily Rewards (patched)': () => {
          fetch('https://play.blooket.com/api/users/verify-session', { credentials: 'include' })
            .then((_0x288d72) => _0x288d72.json())
            .then((_0x5e85e2) => {
              _0x52e1f9()
                .then(async (_0x7425ce) => {
                  fetch('https://api.blooket.com/api/users/add-rewards', {
                    method: 'put',
                    credentials: 'include',
                    headers: {
                      'content-type': 'application/json',
                      'X-Blooket-Build': _0x7425ce.blooketBuild,
                    },
                    body: await _0x225843(
                      {
                        name: _0x5e85e2.name,
                        addedTokens: 250,
                        addedXp: 300,
                      },
                      _0x7425ce.secret
                    ),
                  })
                  fetch('https://api.blooket.com/api/users/add-rewards', {
                    method: 'put',
                    credentials: 'include',
                    headers: {
                      'content-type': 'application/json',
                      'X-Blooket-Build': _0x7425ce.blooketBuild,
                    },
                    body: await _0x225843(
                      {
                        name: _0x5e85e2.name,
                        addedTokens: 250,
                        addedXp: 300,
                      },
                      _0x7425ce.secret
                    ),
                  })
                    .then(() => alert('Added daily rewawrds!'))
                    .catch(() =>
                      alert('There was an error when adding rewards!')
                    )
                })
                .catch(() => alert('There was an error encoding requests!'))
            })
            .catch(() => alert('There was an error getting username!'))
        },
        'Spoof Blooks': () => {
          if (!window.location.pathname.split('/').includes('lobby')) {
            return alert(
              'You must be in a game lobby! (e.g. https://www.blooket.com/play/lobby)'
            )
          }
          _0x16e7b1().stateNode.setState({
            lockedBlooks: [],
            takenBlooks: [],
          })
        },
        'Toggle Auto Answer': () => {
          _0x192807 = !_0x192807
        },
        'Toggle Highlight Answers': () => {
          _0xa70a5b = !_0xa70a5b
        },
        'Spam Open Boxes': () => {
          let _0x2e9ff8 = prompt('Which box do you want to open? (e.g. Space)')
          if (!Object.keys(_0x844e9b).includes(_0x2e9ff8.toLowerCase())) {
            return alert('I could not find that box!')
          }
          let _0x1e220c = prompt('How many boxes do you want to open?')
          fetch('https://api.blooket.com/api/users', { credentials: 'include' })
            .then((_0x24c4c2) => _0x24c4c2.json())
            .then((_0x1c2fbe) => {
              if (
                _0x1c2fbe.tokens <
                _0x844e9b[_0x2e9ff8.toLowerCase()] * _0x1e220c
              ) {
                _0x1e220c = Math.floor(
                  _0x1c2fbe.tokens / _0x844e9b[_0x2e9ff8.toLowerCase()]
                )
              }
              if (!_0x1e220c) {
                return alert('You do not have enough tokens!')
              }
              let _0x20baf4 = (_0x14df54) =>
                new Promise((_0x15e163) => setTimeout(_0x15e163, _0x14df54))
              _0x52e1f9()
                .then(async (_0x2dbc62) => {
                  let _0x5c55ae = false,
                    _0x138634 = []
                  for (let _0x1eca54 = 0; _0x1eca54 < _0x1e220c; _0x1eca54++) {
                    fetch('https://api.blooket.com/api/users/unlockblook', {
                      method: 'put',
                      credentials: 'include',
                      headers: {
                        'content-type': 'application/json',
                        'X-Blooket-Build': _0x2dbc62.blooketBuild,
                      },
                      body: await _0x225843(
                        {
                          name: _0x1c2fbe.name,
                          box:
                            _0x2e9ff8.charAt(0).toUpperCase() +
                            _0x2e9ff8.slice(1).toLowerCase(),
                        },
                        _0x2dbc62.secret
                      ),
                    })
                      .then(async (_0x260ead) => {
                        let _0x777588 = await _0x260ead.json()
                        _0x138634.push(_0x777588.unlockedBlook)
                        alert(
                          _0x777588.unlockedBlook +
                            ' (' +
                            (_0x1eca54 + 1) +
                            '/' +
                            _0x1e220c +
                            ')'
                        )
                      })
                      .catch(() => {
                        _0x5c55ae = true
                      })
                    await _0x20baf4(750)
                    if (_0x5c55ae) {
                      break
                    }
                  }
                  let _0x3635aa = { _0x847f3f: (_0x3635aa[_0x847f3f] || 0) + 1 }
                  _0x138634.forEach((_0x847f3f) => {})
                  alert(
                    'Results:\n' +
                      Object.entries(_0x3635aa)
                        .map(
                          (_0x1e26a5) =>
                            '    ' + _0x1e26a5[1] + ' ' + _0x1e26a5[0]
                        )
                        .join('\n')
                  )
                })
                .catch(() => alert('There was an error encoding requests!'))
            })
            .catch(() => alert('There was an error getting username!'))
        },
        'Auto Sell Dupes': () => {
          fetch('https://api.blooket.com/api/users', { credentials: 'include' })
            .then((_0x280be5) => _0x280be5.json())
            .then((_0x2c8adf) => {
              let _0x3281d8 = Object.entries(_0x2c8adf.unlocks)
                  .map((_0x2aaa23) => [_0x2aaa23[0], _0x2aaa23[1] - 1])
                  .filter((_0x4e6cb5) => _0x4e6cb5[1] > 0),
                _0x4f6327 = (_0x116d00) =>
                  new Promise((_0x2e96a1) => setTimeout(_0x2e96a1, _0x116d00))
              _0x52e1f9()
                .then(async (_0xa5c3f) => {
                  let _0x45795a = false
                  alert('Selling duplicate blooks, please wait')
                  for (let [_0x8034c8, _0x35f029] of _0x3281d8) {
                    fetch('https://api.blooket.com/api/users/sellblook', {
                      method: 'put',
                      credentials: 'include',
                      headers: {
                        'content-type': 'application/json',
                        'X-Blooket-Build': _0xa5c3f.blooketBuild,
                      },
                      body: await _0x225843(
                        {
                          name: _0x2c8adf.name,
                          blook: _0x8034c8,
                          numSold: _0x35f029,
                        },
                        _0xa5c3f.secret
                      ),
                    }).catch(() => {
                      _0x45795a = true
                    })
                    await _0x4f6327(750)
                    if (_0x45795a) {
                      break
                    }
                  }
                  alert(
                    'Results:\n' +
                      _0x3281d8
                        .map(
                          (_0x2b203c) =>
                            '    ' + _0x2b203c[1] + ' ' + _0x2b203c[0]
                        )
                        .join('\n')
                  )
                })
                .catch(() => alert('There was an error encoding requests!'))
            })
            .catch(() => alert('There was an error getting user data!'))
        },
      },
      cafe: {
        'Infinite Food': () => {
          if (document.location.pathname != '/cafe') {
            return alert("This cheat doesn't work in the shop!")
          }
          _0x16e7b1().stateNode.state.foods.forEach(
            (_0x11f5e9) => (_0x11f5e9.stock = 99999)
          )
          _0x16e7b1().stateNode.forceUpdate()
        },
        'Max Levels': () => {
          if (document.location.pathname != '/cafe/shop') {
            return alert('This cheat only works in the shop!')
          }
          Object.keys(_0x16e7b1().stateNode.state.items).forEach(
            (_0x3afc41) => (_0x16e7b1().stateNode.state.items[_0x3afc41] = 5)
          )
          _0x16e7b1().stateNode.forceUpdate()
        },
        'Set Cash': () => {
          _0x16e7b1().stateNode.setState({
            cafeCash: Number(
              parseFloat(prompt('How much cash would you like?'))
            ),
          })
        },
        'Reset Abilities': () => {
          Object.keys(_0x16e7b1().stateNode.state.abilities).forEach(
            (_0x218604) =>
              (_0x16e7b1().stateNode.state.abilities[_0x218604] = 5)
          )
          _0x16e7b1().stateNode.forceUpdate()
        },
      },
      kingdom: {
        'Choice ESP': () => {
          _0x432de6 = !_0x432de6
        },
        'Max Stats': () => {
          _0x16e7b1().stateNode.setState({
            materials: 100,
            people: 100,
            happiness: 100,
            gold: 100,
          })
        },
        'Disable Toucan': () => {
          _0x16e7b1().stateNode.taxCounter = Number.MAX_VALUE
        },
        'Set Guests': () => {
          let _0x3a4d92 = Number(
            parseFloat(prompt('How many guests do you want?'))
          )
          _0x16e7b1().stateNode.setState({ guestScore: _0x3a4d92 })
        },
        'Skip Guest': () => {
          _0x16e7b1().stateNode.nextGuest()
        },
      },
      crypto: {
        'Auto Hack': () => {
          _0x5b935a = !_0x5b935a
        },
        'Set Crypto': () => {
          let _0x929b1e = Number(
            parseFloat(prompt('How much crypto do you want?'))
          )
          _0x16e7b1().stateNode.setState({
            crypto2: _0x929b1e,
            crypto: _0x929b1e,
          })
        },
        'Custom Password': () => {
          let _0x51a3f9 = Number(
            parseFloat(prompt('What do you want to set your password to?'))
          )
          _0x16e7b1().stateNode.setState({ password: _0x51a3f9 })
        },
        'Remove Hack': () => {
          _0x16e7b1().stateNode.setState({ hack: '' })
        },
        "Reset Player's Crypto": () => {
          let _0x12744c = prompt('Name of player'),
            _0x4fe18b = _0x16e7b1()
          !_0x12744c ||
            _0x4fe18b.memoizedProps.firebase.getDatabaseVal(
              _0x4fe18b.memoizedProps.client.hostId,
              'c',
              (..._0x1a8c00) => {
                let _0x1b9e0c = Object.keys(_0x1a8c00[0])
                if (_0x1b9e0c.some((_0x1770cb) => _0x1770cb == _0x12744c)) {
                  _0x1b9e0c.forEach((_0x4c399f) => {
                    _0x4c399f == _0x12744c &&
                      (_0x4fe18b.memoizedProps.firebase.setVal({
                        id: _0x4fe18b.memoizedProps.client.hostId,
                        path: 'c/' + _0x4fe18b.memoizedProps.client.name,
                        val: {
                          p: _0x4fe18b.stateNode.state.password,
                          b: _0x4fe18b.memoizedProps.client.blook,
                          cr: _0x4fe18b.stateNode.state.crypto,
                          tat:
                            _0x4c399f + ':' + (_0x1a8c00[0][_0x4c399f].cr || 0),
                        },
                      }),
                      alert("Reset player's crypto"))
                  })
                } else {
                  alert('Player does not exist')
                }
              }
            )
        },
      },
      factory: {
        'All Mega Bot': () => {
          let _0x1c608c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].fill({
            name: 'Mega Bot',
            color: '#d71f27',
            class: '\uD83E\uDD16',
            rarity: 'Legendary',
            cash: [80000, 430000, 4200000, 62000000, 1000000000],
            time: [5, 5, 3, 3, 3],
            price: [7000000, 120000000, 1900000000, 35000000000],
            active: false,
            level: 4,
            bonus: 5.5,
          })
          _0x16e7b1().stateNode.setState({ blooks: _0x1c608c })
        },
        'Remove Glitches': () => {
          _0x16e7b1().stateNode.setState({
            glitch: '',
            bites: 0,
            ads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hazards: ['', '', '', '', ''],
            lol: false,
            joke: false,
            slow: false,
            dance: false,
            popUpAmount: 0,
          })
        },
        'Max Blooks': () => {
          _0x16e7b1().stateNode.state.blooks.forEach((_0x480ddc) => {
            _0x480ddc.level = 4
          })
        },
        'Set Cash': () => {
          let _0x3bb733 = Number(
            parseFloat(prompt('How much cash do you want?'))
          )
          _0x16e7b1().stateNode.setState({ cash: _0x3bb733 })
        },
      },
      fishing: {
        'Set Weight': () => {
          let _0x3b582f = Number(
            parseFloat(prompt('How much weight do you want?'))
          )
          _0x16e7b1().stateNode.setState({
            weight2: _0x3b582f,
            weight: _0x3b582f,
          })
        },
        'Set Lure': () => {
          let _0x88fe12 =
            Number(
              parseFloat(
                prompt('What do you want to set your lure to? (1 - 5)')
              )
            ) - 1
          _0x16e7b1().stateNode.setState({
            lure: _0x88fe12 < 0 ? 0 : _0x88fe12 > 4 ? 4 : _0x88fe12,
          })
        },
      },
      gold: {
        'Set Gold': () => {
          let _0x156152 = Number(
            parseFloat(prompt('How much gold do you want?'))
          )
          _0x16e7b1().stateNode.setState({
            gold2: _0x156152,
            gold: _0x156152,
          })
        },
        'Chest ESP': () => {
          _0x5d1bc4 = !_0x5d1bc4
        },
        "Set Player's Gold": () => {
          let _0x56131c = _0x16e7b1(),
            _0x2d7859 = prompt('Player to set gold'),
            _0x5cc46a = Number(parseFloat(prompt('Amount to set gold to')))
          _0x56131c.memoizedProps.firebase.setVal({
            id: _0x56131c.memoizedProps.client.hostId,
            path: 'c/' + _0x56131c.memoizedProps.client.name,
            val: {
              b: _0x56131c.memoizedProps.client.blook,
              g: _0x56131c.stateNode.state.gold,
              tat: _0x2d7859 + ':swap:' + _0x5cc46a,
            },
          })
        },
      },
      racing: {
        'Instant Win': () => {
          _0x16e7b1().stateNode.setState({
            progress: _0x16e7b1().stateNode.state.goalAmount,
          })
          setTimeout(() => {
            try {
              Array.from(
                document.body.querySelectorAll('div[class*="answerText"]')
              )
                .filter(
                  (_0x4c2e2a) =>
                    _0x4c2e2a.firstChild.innerHTML ==
                    _0x16e7b1().memoizedState.question.correctAnswers[0]
                )[0]
                .click()
            } catch {
              try {
                Array.from(
                  document.body.querySelectorAll('div[class*="answerText"]')
                )
                  .filter(
                    (_0x36498d) =>
                      _0x36498d.firstChild.innerHTML ==
                      _0x16e7b1().memoizedProps.client.question
                        .correctAnswers[0]
                  )[0]
                  .click()
              } catch {}
            }
          }, 100)
        },
      },
      defense: {
        'Clear Enemies': () => {
          _0x16e7b1().stateNode.enemies = []
        },
        'Max Towers': () => {
          _0x16e7b1().stateNode.towers.forEach((_0x26ce45) => {
            _0x26ce45.damage = 99999999
            _0x26ce45.range = 99999999
            _0x26ce45.fullCd = 0
          })
        },
        'Remove Ducks': () => {
          data = _0x16e7b1().stateNode
          data.ducks.forEach((_0x53b276) => {
            data.tiles[_0x53b276.y][_0x53b276.x] = 0
          })
          data.ducks.length = 0
        },
        'Place Towers Anywhere': () => {
          _0x16e7b1().stateNode.tiles = _0x16e7b1().stateNode.tiles.map(
            (_0x5c78bb) =>
              _0x5c78bb.map((_0x1eb77a) => (_0x1eb77a == 2 ? 0 : _0x1eb77a))
              
          )
        },
        'Set Damage': () => {
          let _0x4f9286 = Number(
            parseFloat(prompt('How much damage do you want?'))
          )
          _0x16e7b1().stateNode.dmg = _0x4f9286
        },
        'Set Round': () => {
          let _0x1b9403 = Number(
            parseFloat(prompt('What round do you want to set it to?'))
          )
          _0x16e7b1().stateNode.setState({ round: _0x1b9403 })
        },
        'Set Tokens': () => {
          let _0x2f845e = Number(
            parseFloat(prompt('How many tokens do you want?'))
          )
          _0x16e7b1().stateNode.setState({ tokens: _0x2f845e })
        },
      },
      doom: {
        'Set Coins': () => {
          try {
            _0x16e7b1().stateNode.props.setTowerCoins(
              Number(parseFloat(prompt('How many coins do you want?')))
            )
          } catch {}
        },
        'Lower Enemy Stats': () => {
          let _0x4f7eb1 = _0x16e7b1().stateNode.state
          if (_0x4f7eb1.phase != 'select') {
            return alert('You must be on the attribute selection page!')
          }
          _0x16e7b1().stateNode.setState({
            enemyCard: {
              ..._0x4f7eb1.enemyCard,
              strength: 0,
              charisma: 0,
              wisdom: 0,
            },
          })
        },
        'Max Player Stats': () => {
          let _0x431efd = _0x16e7b1().stateNode.state
          if (_0x431efd.phase != 'select') {
            return alert('You must be on the attribute selection page!')
          }
          _0x16e7b1().stateNode.setState({
            myCard: {
              ..._0x431efd.myCard,
              strength: 20,
              charisma: 20,
              wisdom: 20,
            },
          })
        },
        'Heal Player': () => {
          _0x16e7b1().stateNode.setState({ myLife: 100 })
        },
      },
      rush: {
        'Set Defense': () => {
          let _0x173e55 = _0x16e7b1()
          _0x173e55.stateNode.props.firebase.setVal({
            id: _0x173e55.stateNode.props.client.hostId,
            path: 'c/' + _0x173e55.stateNode.props.client.name + '/d',
            val: Number(parseFloat(prompt('How much defense do you want?'))),
          })
        },
        'Set Blooks': () => {
          let _0x1d977b = _0x16e7b1()
          _0x1d977b.stateNode.props.firebase.setVal({
            id: _0x1d977b.stateNode.props.client.hostId,
            path: 'c/' + _0x1d977b.stateNode.props.client.name + '/bs',
            val: Number(parseFloat(prompt('How many blooks do you want?'))),
          })
        },
      },
    },
    _0x3b6092 = document.createElement('details')
  _0x3b6092.innerHTML =
    '<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>'
  for (
    var _0x1d48f2 = 0;
    _0x1d48f2 < Object.keys(_0x3bf5ea.global).length;
    _0x1d48f2++
  ) {
    let _0x48044a = _0x1e647f(Object.keys(_0x3bf5ea.global)[_0x1d48f2])
    _0x48044a.onclick =
      _0x3bf5ea.global[Object.keys(_0x3bf5ea.global)[_0x1d48f2]]
    _0x3b6092.appendChild(_0x48044a)
  }
  _0x3b6092.open = true
  _0x3b6092.style.paddingBottom = '10px'
  _0x11d291.appendChild(_0x3b6092)
  let _0x18d619 = document.createElement('div')
  _0x11d291.appendChild(_0x18d619)
  _0x336148 = setInterval(() => {
    if (_0x1a1af1 != _0x31024b()) {
      _0x1a1af1 = _0x31024b()
      curPageEl.innerText = _0x31024b(true)
        ? 'Current gamemode: ' + _0x31024b(true)
        : 'No game detected'
      Array.from(_0x18d619.children).forEach((_0x3634b6) => _0x3634b6.remove())
      if (_0x1a1af1 && _0x3bf5ea[_0x1a1af1]) {
        Object.keys(_0x3bf5ea[_0x1a1af1]).forEach((_0x2acad4) => {
          let _0x364e16 = _0x1e647f(_0x2acad4)
          _0x364e16.onclick = _0x3bf5ea[_0x1a1af1][_0x2acad4]
          _0x18d619.appendChild(_0x364e16)
          _0x18d619.appendChild(document.createElement('br'))
        })
      }
    }
    let _0x6f4d67 =
      'Auto Answer: ' +
      (_0x192807 ? 'Enabled' : 'Disabled') +
      '\nHighlight Answers: ' +
      (_0xa70a5b ? 'Enabled' : 'Disabled') +
      (_0x1a1af1 == 'kingdom'
        ? '\nChoice ESP: ' + (_0x432de6 ? 'Enabled' : 'Disabled')
        : _0x1a1af1 == 'crypto'
        ? '\nAuto Hack: ' + (_0x5b935a ? 'Enabled' : 'Disabled')
        : _0x1a1af1 == 'gold'
        ? '\nChest ESP: ' + (_0x5d1bc4 ? 'Enabled' : 'Disabled')
        : '')
    _0x506666.innerText != _0x6f4d67 && (_0x506666.innerText = _0x6f4d67)
    if (_0x192807) {
      try {
        Array.from(document.body.querySelectorAll('div[class*="answerText"]'))
          .filter(
            (_0x25f861) =>
              _0x25f861.firstChild.innerHTML ==
              _0x16e7b1().memoizedState.question.correctAnswers[0]
          )[0]
          .click()
      } catch {
        try {
          Array.from(document.body.querySelectorAll('div[class*="answerText"]'))
            .filter(
              (_0x333e85) =>
                _0x333e85.firstChild.innerHTML ==
                _0x16e7b1().memoizedProps.client.question.correctAnswers[0]
            )[0]
            .click()
        } catch {}
      }
    }
    if (_0xa70a5b) {
      try {
        Array.from(
          document.querySelector('div[class*="answersHolder"').children
        ).forEach((_0x53bbb6) => {
          if (
            _0x16e7b1().memoizedState.question.correctAnswers.includes(
              _0x53bbb6.innerText
            ) ||
            _0x16e7b1().memoizedProps.client.question.correctAnswers.includes(
              _0x53bbb6.innerText
            )
          ) {
            _0x53bbb6.firstChild.style = 'background-color: rgb(0, 207, 119);'
          } else {
            _0x53bbb6.firstChild.style = 'background-color: rgb(225, 40, 33);'
          }
        })
      } catch {}
    }
    if (_0x1a1af1 == 'kingdom') {
      Array.from(document.getElementsByClassName('choiceESP')).forEach(
        (_0x3b320b) => _0x3b320b.remove()
      )
      if (_0x432de6) {
        try {
          let _0x4a6dae = {
              materials: Array.from(document.querySelectorAll('div')).find(
                (_0x18facc) =>
                  Array.from(_0x18facc.children).find((_0x539080) =>
                    _0x539080.className.includes('tree')
                  )
              ),
              people: Array.from(document.querySelectorAll('div')).find(
                (_0x55d6a6) =>
                  Array.from(_0x55d6a6.children).find(
                    (_0x2e7e05) =>
                      _0x2e7e05.className.includes('users') &&
                      _0x2e7e05.parentElement.className.includes(
                        'statContainer'
                      )
                  )
              ),
              happiness: Array.from(document.querySelectorAll('div')).find(
                (_0x14de71) =>
                  Array.from(_0x14de71.children).find((_0x453e55) =>
                    _0x453e55.className.includes('grin')
                  )
              ),
              gold: Array.from(document.querySelectorAll('div')).find(
                (_0x337c87) =>
                  Array.from(_0x337c87.children).find((_0x2cb78a) =>
                    _0x2cb78a.className.includes('coins')
                  )
              ),
            },
            _0x1e0111 = _0x16e7b1().stateNode.state.guest
          Object.entries(_0x1e0111.yes).forEach((_0x256930) => {
            if (_0x256930[0] == 'msg') {
              return
            }
            let _0x10c4c4 = document.createElement('div')
            _0x10c4c4.className = 'choiceESP'
            _0x10c4c4.style =
              'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;'
            _0x10c4c4.innerText = String(_0x256930[1])
            _0x4a6dae[_0x256930[0]].appendChild(_0x10c4c4)
          })
          Object.entries(_0x1e0111.no).forEach((_0x37cd4c) => {
            if (_0x37cd4c[0] == 'msg') {
              return
            }
            let _0x29963c = document.createElement('div')
            _0x29963c.className = 'choiceESP'
            _0x29963c.style =
              'font-size: 24px; color: darkred; font-weight: bolder;'
            _0x29963c.innerText = String(_0x37cd4c[1])
            _0x4a6dae[_0x37cd4c[0]].appendChild(_0x29963c)
          })
        } catch (_0x1a03b9) {}
      }
    }
    if (_0x1a1af1 == 'crypto' && _0x5b935a) {
      let { stage: _0xdd6772, correctPassword: _0x2730fa } = Object.values(
        document.querySelector('#app > div > div')
      )[1].children[1]['_owner'].stateNode.state
      if (_0xdd6772 == 'hack') {
        Array.from(document.querySelectorAll('div'))
          .filter((_0x4ea0ed) => _0x4ea0ed.innerHTML == _0x2730fa)[0]
          .click()
      }
    }
    if (_0x1a1af1 == 'gold' && _0x5d1bc4) {
      try {
        if (_0x16e7b1().stateNode.state.stage == 'prize') {
          let { choices: _0xbb5e7e } = _0x16e7b1().stateNode.state,
            _0x7a744a = document.querySelector("div[class*='regularBody']")
              .children[1]
          if (_0x7a744a) {
            if (!document.querySelectorAll('.chest-esp').length) {
              _0xbb5e7e.forEach((_0x1161ca, _0x5e7e56) => {
                textElement = document.createElement('p')
                textElement.className = 'chest-esp'
                textElement.innerText = _0x1161ca.text
                textElement.style =
                  'text-align: center;\n                    font-size: 30px;\n                    color: white;\n                    font-family:Titan One;\n                    sans-serif;\n                    border-color: black;\n                    margin-top: 200px;'
                try {
                  _0x7a744a.children[_0x5e7e56].appendChild(textElement)
                } catch (_0x5bf294) {
                  console.log(_0x5bf294)
                }
              })
            } else {
              _0xbb5e7e.forEach((_0x2bd01a, _0x28312e) => {
                if (
                  _0x7a744a.children.length == 3 &&
                  _0x7a744a.children[_0x28312e].children[1].innerText !=
                    _0x2bd01a.text
                ) {
                  _0x7a744a.children[_0x28312e].children[1].innerText =
                    _0x2bd01a.text
                }
              })
            }
          }
        }
      } catch (_0x4937a1) {
        console.log(_0x4937a1)
      }
    }
  })
  let _0x1a1af1 = _0x31024b()
  if (_0x1a1af1 && _0x3bf5ea[_0x1a1af1]) {
    Object.keys(_0x3bf5ea[_0x1a1af1]).forEach((_0x147732) => {
      let _0x4714a6 = _0x1e647f(_0x147732)
      _0x4714a6.onclick = _0x3bf5ea[_0x1a1af1][_0x147732]
      _0x18d619.appendChild(_0x4714a6)
      _0x18d619.appendChild(document.createElement('br'))
    })
  }
  function _0x1e647f(_0x19265d) {
    let _0x5a6c90 = document.createElement('button')
    return (
      _0x5a6c90.classList.add('cheat'),
      (_0x5a6c90.innerText = _0x19265d),
      _0x5a6c90
    )
  }
  function _0x31024b(_0x52b8e3) {
    switch (window.location.pathname.split('/')[2]) {
      case 'rush':
        return _0x52b8e3 ? 'Blook Rush' : 'rush'
      case 'gold':
        return _0x52b8e3 ? 'Gold Quest' : 'gold'
      case 'fishing':
        return _0x52b8e3 ? 'Fishing Frenzy' : 'fishing'
      case 'hack':
        return _0x52b8e3 ? 'Crypto Hack' : 'crypto'
      case 'battle-royale':
        return _0x52b8e3 ? 'Battle Royale' : 'royale'
      case 'factory':
        return _0x52b8e3 ? 'Factory' : 'factory'
      case 'racing':
        return _0x52b8e3 ? 'Racing' : 'racing'
      case 'classic':
        return _0x52b8e3 ? 'Classic' : 'classic'
      default:
        switch (window.location.pathname.split('/')[1]) {
          case 'defense':
            return _0x52b8e3 ? 'Tower Defense' : 'defense'
          case 'cafe':
            return _0x52b8e3 ? 'Café' : 'cafe'
          case 'tower':
            return _0x52b8e3 ? 'Tower of Doom' : 'doom'
          case 'kingdom':
            return _0x52b8e3 ? 'Crazy Kingdom' : 'kingdom'
          default:
            return false
        }
    }
  }
  function _0x5cd842(_0x5cb43c) {
    _0x5cb43c.code == 'KeyE' && (_0x199ce5.hidden = !_0x199ce5.hidden)
  }
  addEventListener('keypress', _0x5cd842)
})()
