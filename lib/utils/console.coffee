url = "https://github.com/fxhxyz4/fp-coffee"
l = "\x1b[37m"
e = "\x1b[31merror\x1b[37m"
i = "\x1b[34minfo\x1b[37m"
w = "\x1b[33mwarn\x1b[37m"

log = (msg) -> console.log(l, msg)
err = (msg) -> console.error(e, msg, "\n#{i} Visit #{url}")
info = (msg) -> console.info(i, msg)
warn = (msg) -> console.warn(w, msg)

module.exports = { log, err, warn, info }
