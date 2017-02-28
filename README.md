# email-domains
> Get a random email or list of email domains

[![Codeship Status for bukinoshita/email-domains](https://app.codeship.com/projects/170c5b20-e01c-0134-8f7a-5ecc5558b622/status?branch=master)](https://app.codeship.com/projects/205151)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/email-domains.svg)](https://www.npmjs.com/package/email-domains)
[![license](https://img.shields.io/github/license/bukinoshita/email-domains.svg)](https://raw.githubusercontent.com/bukinoshita/email-domains/master/LICENSE)

## Install
```
$ npm install --save email-domains
```

## Usage
```js
import emailDomains from 'email-domains'

console.log(emailDomains.all)
// => [gmail.com, google.com, icloud.com, ...]

console.log(emailDomains.generate())
// => johndoe@yahoo.com
```

## API
### emailDomains

#### .all
Return an array of email-domains

#### .random()
Return a random email domain

#### .generate()
Return a random email

## Related
- [Names](https://github.com/bukinoshita/Names) — List of names
- [namae](https://github.com/bukinoshita/namae) — :couple: Get a list of names or a random name
- [nickname](https://github.com/bukinoshita/nickname) — :kissing_cat: Get a list of nicknames or a random nickname
- [rnd-age](https://github.com/bukinoshita/rnd-age) — :keycap_ten: Generate a random age
- [rnd-date](https://github.com/bukinoshita/rnd-date) — :date: Get a random date
- [faceit](https://github.com/bukinoshita/faceit) — :information_desk_person: Diverse user images for user interface design
- [rnd-drawish](https://github.com/bukinoshita/rnd-drawish) — :twisted_rightwards_arrows: List of words & random word

## License
[MIT](https://github.com/bukinoshita/email-domains/blob/master/LICENSE) &copy; Bu Kinoshita
