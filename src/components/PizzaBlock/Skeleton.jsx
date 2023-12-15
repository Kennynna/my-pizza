import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#e4dcdc"
    foregroundColor="#494141"
  >
    <circle cx="121" cy="125" r="115" /> 
    <rect x="18" y="259" rx="7" ry="7" width="216" height="18" /> 
    <rect x="19" y="294" rx="7" ry="7" width="216" height="18" /> 
    <rect x="20" y="332" rx="7" ry="7" width="216" height="18" /> 
    <circle cx="219" cy="377" r="14" /> 
    <rect x="23" y="363" rx="0" ry="0" width="63" height="24" />
  </ContentLoader>
)

export default Skeleton