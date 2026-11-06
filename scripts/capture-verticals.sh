#!/bin/bash
# Re-capture the three vertical thumbnails from the LIVE sites.
#
# Captured from production rather than from a local dev server on purpose: the
# point of these images is to show a visitor what they will actually get when
# they click through, palette included. A local capture can be correct while
# the deployed bundle is not — which is exactly what happened once, when both
# dashboards served a blue theme for weeks while every source-level check
# passed.
#
# 1440x640 is a deliberate crop. It lands just below the headline KPI row on
# each dashboard, which is the part that reads at thumbnail size; the charts
# further down do not survive the downscale anyway.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p public/verticals

shoot() {
  echo "  $1 <- $2"
  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --window-size=1440,640 --virtual-time-budget=30000 \
    --run-all-compositor-stages-before-draw \
    --screenshot="public/verticals/$1.png" "$2" 2>/dev/null
}

shoot regimen https://regimen.neimananalytics.com/executive
shoot yield   https://yield.neimananalytics.com/overview
shoot barrel  https://barrel.neimananalytics.com/overview

echo
ls -lh public/verticals/*.png | awk '{print "  "$9"  "$5}'
