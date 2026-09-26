import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Logo: QuartzComponent = () => {
  return (
    <a href="/" class="site-logo">
      <img src="/static/icon.png" alt="Home" />
    </a>
  )
}

Logo.css = `
.site-logo {
  display: flex;
  align-items: center;
}

.site-logo img {
  max-width: 180px;
  max-height: 50px;
  width: auto;
  height: auto;
}
`

export default (() => Logo) satisfies QuartzComponentConstructor
