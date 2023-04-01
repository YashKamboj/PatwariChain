import React from 'react'
import Campaigns from "../components/Campaigns";

function CampaignsPage() {
  return (
    <div className="flex gap-6 mt-8 justify-center">
            <div className="flex flex-col">
              <Campaigns />
            </div>
          </div>
  )
}

export default CampaignsPage