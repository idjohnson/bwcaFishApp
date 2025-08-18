export interface Fish {
  name: string;
  slug: string;
  description: string;
  lures: string[];
  bait: string[];
  techniques: string[];
  image: string;
}

export const fishData: Fish[] = [
  {
    name: "Walleye",
    slug: "walleye",
    description: "Often considered the best-eating fish in the region, walleye are a popular target. They are most active in the evenings and early mornings.",
    lures: [
      "Jigs (1/8 to 1/4 oz) in yellow or other bright colors.",
      "Rapala Jointed Shad Rap (Size 7).",
      "Soft plastics like Berkeley Power Baits (twister tail grubs, paddle tail minnows) or scented Gulp minnows (especially in Quetico)."
    ],
    bait: [
      "Leeches (highly effective).",
      "Nightcrawlers.",
      "Minnows."
    ],
    techniques: [
      "Jigging: A top presentation for walleye. Tip jigs with bait or soft plastics.",
      "Slip Bobber: (BWCAW) A very effective method with a leech.",
      "Trolling: Trolling crankbaits can be very productive.",
      "Location: Look for walleye along shorelines with rocks and current in the spring and early summer. In the summer, they move to mid-lake points and humps."
    ],
    image: "/images/walleye.png"
  },
  {
    name: "Smallmouth Bass",
    slug: "smallmouth-bass",
    description: "The Boundary Waters and Quetico are considered to have some of the best smallmouth bass fishing in North America.",
    lures: [
      "Topwater: River2Sea Whopper Plopper #90, Skitter Pop, and other poppers (especially from mid-May through mid-June).",
      "Subsurface: Blue Fox Vibrax Spinner (Size 5, gold or yellow), jigs with soft plastics, Zoom Flukes, and Rapala Jerk Baits."
    ],
    bait: [
      "While less common for bass, a leech or nightcrawler can be effective."
    ],
    techniques: [
      "Topwater: Casting topwater lures toward the shore is a thrilling way to catch smallmouth.",
      "Subsurface: When they aren't hitting topwater, casting spinners or jigs with soft plastics near structure is a great alternative.",
      "Fall: In the fall, look for schools of bass near natural pinch-points with access to deep water."
    ],
    image: "/images/smallmouth_bass.png"
  },
  {
    name: "Northern Pike",
    slug: "northern-pike",
    description: "Known as the 'Water Wolf,' northern pike are aggressive predators that will strike a wide variety of lures.",
    lures: [
      "Flashy lures like Mepps spinners and Dardevle spoons.",
      "Blue Fox Vibrax Spinner (Size 5).",
      "Spinnerbaits are great for weedy bays."
    ],
    bait: [
      "Large minnows or chubs."
    ],
    techniques: [
      "Location: Pike are often found in shallow bays in the spring and early summer. In mid-summer, larger pike move to deeper, cooler water.",
      "Casting: Casting spoons and spinnerbaits near weed lines is a reliable technique.",
      "Trolling: Trolling deep-diving lures can be effective for larger pike in the summer.",
      "Leader: Use a steel leader to prevent their sharp teeth from cutting your line."
    ],
    image: "/images/northern_pike.png"
  },
  {
    name: "Lake Trout",
    slug: "lake-trout",
    description: "These fish prefer cold, deep water, making them a popular target from ice-out to mid-June and again in the fall when they are in shallower water.",
    lures: [
      "Large spoons like Dardevles or Dr. Spoons.",
      "Lipless crankbaits (e.g., Klos Boy's).",
      "White jigs."
    ],
    bait: [
      "Minnows (tip a white jig with a minnow)."
    ],
    techniques: [
      "Trolling: Early in the season, trolling large spoons is a standard technique.",
      "Jigging: A more recent and effective method is to let a heavy lipless crankbait sink to the bottom and vertically jig it as the canoe drifts.",
      "Location: In mid-summer, you'll need to fish in deeper water, often over 50 feet, by trolling deep-diving lures or jigging heavy spoons."
    ],
    image: "/images/trout.png"
  },
  {
    name: "Muskellunge",
    slug: "muskellunge",
    description: "Known as the 'fish of 10,000 casts,' muskies are a prized trophy fish for their size and aggressive nature.",
    lures: [
      "Large bucktails (double-bladed)",
      "Big crankbaits (Jake, .22 Short)",
      "Jerkbaits (Suick, Bobbies)",
      "Topwater lures (Top Raider)",
      "Large soft plastics (Medussa, Bondy Bait)"
    ],
    bait: [
      "Large live bait such as suckers (10-14 inches), bluegill, or shiners on a quick-strike rig."
    ],
    techniques: [
      "Casting and retrieving large lures with a figure-eight motion at the boat.",
      "Trolling with large diving plugs to cover water.",
      "Jigging with heavy baits like the Bondy Bait in deep water or current.",
      "Focus on weed edges, drop-offs, and current breaks."
    ],
    image: "/images/muskellunge.png"
  },
  {
    name: "Crappie",
    slug: "crappie",
    description: "Crappies are a popular panfish, known for their schooling behavior and willingness to bite.",
    lures: [
      "Small jigs (1/16 to 1/8 oz) with soft plastic tails.",
      "Beetle Spins.",
      "Small crankbaits."
    ],
    bait: [
      "Small minnows.",
      "Wax worms.",
      "Crappie nibbles."
    ],
    techniques: [
      "Jigging: Using small jigs around submerged structure is a classic crappie technique.",
      "Slip Bobber: A slip bobber with a small minnow is a deadly combination.",
      "Casting: Casting small spinners or crankbaits can be effective when crappies are active."
    ],
    image: "/images/crappie.png"
  }
];