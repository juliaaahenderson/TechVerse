export interface Product {
  id: string;
  name: string;
  category: 'Laptops' | 'Smartphones' | 'Headphones' | 'Smartwatches' | 'Accessories' | 'Tablets';
  price: number;
  rating: number;
  image: string;
  description: string;
  specs: { [key: string]: string };
  features: string[];
  securityRecs: string[];
}

export interface SecurityPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  devices: string;
  features: string[];
  idealFor: string;
  level: 'Basic' | 'Advanced' | 'Ultimate';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Security News' | 'Guides' | 'Threat Alerts' | 'Safe Habits';
  readTime: string;
  date: string;
  image: string;
  content: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air 13" M3',
    category: 'Laptops',
    price: 1099,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    description: 'Strikingly thin and fast. Designed for productivity, creators, and daily premium use with long battery life.',
    specs: {
      Processor: 'Apple M3 Chip (8-Core CPU, 10-Core GPU)',
      Memory: '16GB Unified Memory',
      Storage: '512GB SSD',
      Battery: 'Up to 18 hours',
      Display: '13.6-inch Liquid Retina Display',
    },
    features: [
      'Silent design with fanless cooling',
      'Supports up to two external displays',
      '1080p FaceTime HD camera',
      'Three-microphone array with spatial audio',
    ],
    securityRecs: [
      'Enable FileVault XTS-AES-128 encryption to secure files.',
      'Configure Bitdefender Antivirus for Mac with real-time ransomware protection.',
      'Use Time Machine with an encrypted external disk.',
    ]
  },
  {
    id: 'rog-zephyrus-g14',
    name: 'ASUS ROG Zephyrus G14',
    category: 'Laptops',
    price: 1599,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
    description: 'A masterpiece of engineering, packing ultra-performance gaming and AI processing power inside a sleek 14-inch chassis.',
    specs: {
      Processor: 'AMD Ryzen 9 8945HS',
      Graphics: 'NVIDIA GeForce RTX 4070 (8GB)',
      Memory: '32GB LPDDR5X',
      Storage: '1TB PCIe 4.0 NVMe M.2 SSD',
      Display: '14" 3K OLED 120Hz ROG Nebula Display',
    },
    features: [
      'Premium OLED display with G-Sync',
      'Advanced ROG Intelligent Cooling with liquid metal',
      'Stunning AniMe Matrix LED lid customizer',
      'Dolby Atmos certified quad speakers',
    ],
    securityRecs: [
      'Activate Windows Hello Fingerprint and face recognition.',
      'Enable Bitdefender Total Security for gaming mode performance auto-tuning.',
      'Regularly patch UEFI BIOS via MyASUS dashboard.',
    ]
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro Max',
    category: 'Smartphones',
    price: 1199,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80',
    description: 'Forged in titanium, featuring the groundbreaking A17 Pro chip, custom Action button, and the most powerful iPhone camera system.',
    specs: {
      Processor: 'Apple A17 Pro Chip',
      Camera: '48MP Main | 12MP Ultra Wide | 12MP 5x Telephoto',
      Display: '6.7" Super Retina XDR OLED 120Hz',
      Material: 'Aerospace-grade Titanium design',
      Storage: '256GB',
    },
    features: [
      'USB-C port supporting USB 3 speeds up to 10Gbps',
      'Highly custom action button navigation',
      'Next-generation portrait modes with depth control',
      'Crash detection and Emergency SOS via satellite',
    ],
    securityRecs: [
      'Limit app permission access under iOS Privacy & Security settings.',
      'Install Bitdefender Mobile Security for iOS to screen phishing links in SMS.',
      'Activate iCloud Advanced Data Protection for end-to-end cloud encryption.',
    ]
  },
  {
    id: 'galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Smartphones',
    price: 1299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
    description: 'The ultimate Galaxy smartphone experience powered by Galaxy AI, integrated S-Pen, and an astonishing 200MP camera resolution.',
    specs: {
      Processor: 'Snapdragon 8 Gen 3 for Galaxy',
      Camera: '200MP + 50MP + 12MP + 10MP Quad Rear Camera',
      Display: '6.8" Dynamic AMOLED 2X QHD+ 120Hz',
      Battery: '5000 mAh with 45W Charging',
      Storage: '512GB',
    },
    features: [
      'Live Translate and Circle to Search AI integration',
      'Titanium frame build with IP68 dust/water resistance',
      'Embedded stylus S-Pen for precise control',
      '7 years of guaranteed security updates',
    ],
    securityRecs: [
      'Enable Auto Blocker under Security Settings to block unauthorized app installations.',
      'Deploy Bitdefender Mobile Security for Android to scan for malware background loops.',
      'Leverage Samsung Knox Folder for biometric isolated storage.',
    ]
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Headphones',
    price: 399,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: 'Industry-leading noise cancellation rewriting the rules of distraction-free listening and exceptional call quality.',
    specs: {
      Type: 'Over-Ear Wireless Bluetooth 5.2',
      Battery: 'Up to 30 hours (ANC on) / 40 hours (ANC off)',
      Charging: 'USB-C fast charge (3 mins for 3 hrs play)',
      Weight: '250g',
    },
    features: [
      'Dual Processor V1 and HD Noise Cancelling Processor QN1',
      'Auto NC Optimizer adjusting filters to environment',
      'Speak-to-Chat pauses music automatically when speaking',
      'Multipoint connection lets you pair two devices simultaneously',
    ],
    securityRecs: [
      'Change the default pairing passcode in the Sony Headphones Connect app.',
      'Keep your headphone firmware updated to protect against Bluetooth vulnerabilities.',
      'Avoid installing untrusted companion apps claiming to optimize audio.',
    ]
  },
  {
    id: 'apple-watch-ultra',
    name: 'Apple Watch Ultra 2',
    category: 'Smartwatches',
    price: 799,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=80',
    description: 'The most rugged and capable Apple Watch ever, built for endurance, exploration, and adventure with customizable Action button.',
    specs: {
      Case: '49mm Aerospace-grade Titanium',
      Display: 'Always-On Retina OLED up to 3000 nits brightness',
      GPS: 'Precision dual-frequency GPS',
      Battery: 'Up to 36 hours regular / 72 hours low power mode',
    },
    features: [
      'Water resistant up to 100 meters (depth gauge certified)',
      'Dual speakers and three-mic array with wind noise mitigation',
      'Siren sounding up to 86 decibels to alert rescue teams',
      'Advanced health indicators: ECG, heart rate, sleep tracking, body temp',
    ],
    securityRecs: [
      'Turn on Wrist Detection with PIN password locks.',
      'Only sync data with your secure, protected Apple Account.',
      'Regularly audit shared workout routes under Health App privacy configurations.',
    ]
  },
  {
    id: 'ipad-pro-m4',
    name: 'Apple iPad Pro M4',
    category: 'Tablets',
    price: 999,
    rating: 4.8,
    image: '/prod_ipad.png',
    description: 'The ultimate iPad experience. Impossibly thin design, breakthrough Tandem OLED display, and powerhouse M4 processing performance.',
    specs: {
      Processor: 'Apple M4 Chip (9-Core CPU, 10-Core GPU)',
      Display: '11-inch Ultra Retina XDR Tandem OLED',
      Storage: '256GB SSD',
      Thickness: 'Impossibly thin 5.3mm design',
      Compatibility: 'Supports Apple Pencil Pro and Magic Keyboard'
    },
    features: [
      'Tandem OLED display with nano-texture glass option',
      'Four speaker spatial audio output',
      'Wi-Fi 6E connectivity with optional 5G cellular eSIM',
      'Thunderbolt / USB 4 expansion support'
    ],
    securityRecs: [
      'Activate Face ID biometric protection filters.',
      'Install Bitdefender Mobile Security to block malicious browsing web anchors.',
      'Turn on Lockdown Mode for extreme digital threat protection scenarios.'
    ]
  },
  {
    id: 'dell-xps-16',
    name: 'Dell XPS 16 Laptop',
    category: 'Laptops',
    price: 1899,
    rating: 4.7,
    image: '/prod_dell.png',
    description: 'Premium craftsmanship and performance. Futuristic touch function row, invisible glass touchpad, and cinematic OLED infinity display panels.',
    specs: {
      Processor: 'Intel Core Ultra 7 155H (16-Core)',
      Memory: '16GB LPDDR5X',
      Storage: '1TB M.2 PCIe NVMe SSD',
      Graphics: 'Intel Arc Graphics',
      Display: '16.3" FHD+ InfinityEdge Display'
    },
    features: [
      'Futuristic capacitive touch function rows',
      'Seamless seamless glass haptic touchpad design',
      'CNC machined aluminum and Gorilla Glass chassis',
      'Intel AI Boost NPU dedicated co-processor'
    ],
    securityRecs: [
      'Deploy Windows BitLocker full-disk hardware encryption.',
      'Leverage Bitdefender Total Security with active mic/webcam access triggers.',
      'Audit firmware configurations inside Dell Command software portal.'
    ]
  },
  {
    id: 'bose-qc-ultra',
    name: 'Bose QuietComfort Ultra Headphones',
    category: 'Headphones',
    price: 379,
    rating: 4.8,
    image: '/prod_bose.png',
    description: 'Elite noise cancellation and custom immersive audio. Breakthrough spatial audio delivers a remarkably real sound profile.',
    specs: {
      Type: 'Over-Ear Wireless Bluetooth 5.3',
      Battery: 'Up to 24 hours (18 hours with Immersive Audio)',
      Charging: 'USB-C fast charging (15 mins for 2 hrs play)',
      ANC: 'Custom Bose CustomTune active profile control'
    },
    features: [
      'Bose Immersive Audio spatial sound stage rendering',
      'CustomTune technology auto-adjusts noise cancellation levels',
      'Quiet, Aware, and Immersion multi-listening presets',
      'Advanced microphone array with noise rejecting filters'
    ],
    securityRecs: [
      'Update Bluetooth connection passcodes inside Bose Music application portal.',
      'De-authorize legacy paired endpoints via app manager indicators.',
      'Keep Bose OS firmware updated to neutralize remote exploit vectors.'
    ]
  },
  {
    id: 'pixel-8-pro',
    name: 'Google Pixel 8 Pro',
    category: 'Smartphones',
    price: 999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    description: 'The all-pro phone engineered by Google. It has a refined design, amazing camera system, and breakthrough Google AI features.',
    specs: {
      Processor: 'Google Tensor G3',
      Camera: '50MP Main | 48MP Ultra Wide | 48MP 5x Telephoto',
      Display: '6.7" Super Actua Display 120Hz',
      Battery: '5050 mAh battery'
    },
    features: [
      'Magic Eraser and Best Take photo editing tools',
      'Circle to Search and Live Translate integrated',
      'Thermometer sensor for temperature checks',
      '7 years of OS, security, and Feature Drop updates'
    ],
    securityRecs: [
      'Enable Google Titan M2 security coprocessor filters.',
      'Deploy Bitdefender Mobile Security for real-time link protections.',
      'Audit app background telemetry profiles under Android settings.'
    ]
  },
  {
    id: 'galaxy-watch-ultra',
    name: 'Samsung Galaxy Watch Ultra',
    category: 'Smartwatches',
    price: 649,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80',
    description: 'Designed to push limits. Built with a rugged titanium case, extreme outdoor battery life, and advanced wellness analytics.',
    specs: {
      Case: '47mm Titanium Cushion Design',
      Display: 'Super AMOLED Always-On Display',
      GPS: 'Dual-frequency GPS navigation system',
      Battery: 'Up to 100 hours in Power Saving mode'
    },
    features: [
      '10ATM water resistance and military grade durability',
      'Customizable Quick Button for instant workout control',
      'Energy Score and wellness coaching AI insights',
      'Emergency Siren reaching up to 86 decibels'
    ],
    securityRecs: [
      'Enable Knox security protection filters.',
      'Setup strong pattern or PIN biometric screen locks.',
      'Limit third-party widget background synchronization profiles.'
    ]
  },
  {
    id: 'razer-blade-16',
    name: 'Razer Blade 16 Gaming Laptop',
    category: 'Laptops',
    price: 2999,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80',
    description: 'Experience insane gaming and creator performance. Featuring the world first dual-mode Mini-LED display.',
    specs: {
      Processor: 'Intel Core i9-14900HX',
      Graphics: 'NVIDIA GeForce RTX 4090 (16GB)',
      Memory: '32GB DDR5 5600MHz',
      Storage: '2TB PCIe 4.0 NVMe SSD',
      Display: '16" Dual-Mode Mini-LED (UHD+ 120Hz / FHD+ 240Hz)'
    },
    features: [
      'CNC aluminum anodized chassis with green backlit keyboard',
      'Patented vapor chamber intelligent cooling system',
      'Razer Chroma RGB per-key illumination control',
      'NVIDIA DLSS 3 and full ray tracing support'
    ],
    securityRecs: [
      'Enable firmware-level TPM security inside Razer BIOS.',
      'Install Bitdefender Total Security with dedicated game-booster mode.',
      'Regularly audit Razer Synapse cloud configuration profiles.'
    ]
  },
  {
    id: 'mx-master-3s',
    name: 'Logitech MX Master 3S Mouse',
    category: 'Accessories',
    price: 99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
    description: 'An icon remastered. Quiet click buttons, 8K DPI any-surface tracking, and the hyper-fast MagSpeed electromagnetic scroll wheel.',
    specs: {
      Sensor: '8000 DPI Darkfield high precision tracking',
      Connectivity: 'Bluetooth Low Energy & Logi Bolt USB Receiver',
      Battery: 'Rechargeable Li-Po (500 mAh) battery',
      Buttons: '7 customizable buttons with thumb wheel'
    },
    features: [
      'MagSpeed electromagnetic scroll wheel (1000 lines/sec)',
      'Quiet click buttons reduce noise by 90%',
      'Cross-computer control via Logitech Flow',
      'App-specific customizations and profile shortcuts'
    ],
    securityRecs: [
      'Enable secure Logi Bolt encrypted connection protocol.',
      'Keep Logi Options+ software updated to prevent local injection bugs.',
      'Turn off Bluetooth pairing mode when not actively connecting endpoints.'
    ]
  },
  {
    id: 'zenbook-duo',
    name: 'ASUS Zenbook Duo',
    category: 'Laptops',
    price: 1499,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    description: 'An expansive dual-screen setup. Features two 14-inch OLED touchscreens for ultimate multi-tasking productivity.',
    specs: {
      Processor: 'Intel Core Ultra 9 185H',
      Memory: '32GB LPDDR5X',
      Storage: '1TB M.2 NVMe PCIe 4.0 SSD',
      Display: 'Dual 14" 3K OLED 120Hz touch displays'
    },
    features: [
      'Detachable full-size ErgoSense keyboard and touchpad',
      'Built-in kickstand for vertical or horizontal layouts',
      'Intel AI Boost NPU for efficient client workloads',
      'Harman Kardon premium audio speaker system'
    ],
    securityRecs: [
      'Enable BitLocker hardware encryption on all active drives.',
      'Deploy Bitdefender Total Security with dedicated AI threat protection layers.',
      'Configure biometric login via Windows Hello facial scan.'
    ]
  },
  {
    id: 'sony-a7iv',
    name: 'Sony Alpha 7 IV Camera',
    category: 'Accessories',
    price: 2499,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    description: 'The hybrid standard. 33MP Exmor R sensor, high-speed BIONZ XR processing engine, and next-generation real-time autofocus.',
    specs: {
      Sensor: '33.0 MP Full-frame Exmor R CMOS sensor',
      ISO: 'Expandable ISO 50 - 204800',
      Video: '4K 60p video recording in 10-bit 4:2:2',
      Autofocus: '759 phase-detection points'
    },
    features: [
      'Real-time Eye AF for Humans, Animals, and Birds',
      '5-axis in-body image stabilization (5.5 steps)',
      'Side-opening vari-angle LCD touchscreen monitor',
      'Dual card slots supporting CFexpress Type A'
    ],
    securityRecs: [
      'Format SD cards securely inside camera utility menu.',
      'Secure wireless FTP transmission credentials.',
      'Audit Wi-Fi pairing configurations to prevent connection spoofing.'
    ]
  },
  {
    id: 'surface-pro-11',
    name: 'Microsoft Surface Pro 11',
    category: 'Tablets',
    price: 999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    description: 'Ultra-thin, ultra-light 2-in-1. Features a brilliant PixelSense Flow touchscreen and adjustable kickstand.',
    specs: {
      Processor: 'Snapdragon X Plus (10-Core)',
      Memory: '16GB LPDDR5X',
      Storage: '512GB removable Gen 4 SSD',
      Display: '13-inch PixelSense Flow (2880 x 1920) 120Hz'
    },
    features: [
      'Built-in kickstand with 165 degrees of movement',
      'Dual USB-C ports with USB 4 / Thunderbolt support',
      '14.4 hours of typical device usage battery life',
      '1080p Studio Camera with Windows Studio Effects'
    ],
    securityRecs: [
      'Turn on TPM 2.0 security parameters via UEFI.',
      'Configure Microsoft BitLocker full-disk encryption.',
      'Implement Bitdefender Antivirus with custom web filtering blocks.'
    ]
  },
  {
    id: 'galaxy-smarttag2',
    name: 'Samsung Galaxy SmartTag2',
    category: 'Accessories',
    price: 29,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    description: 'Keep track of what matters. Compass view, long battery life, and IP67 dust/water resistance protection.',
    specs: {
      Battery: 'Up to 500 days (Power Saving Mode up to 700 days)',
      Durability: 'IP67 dust and water resistance',
      Connectivity: 'Bluetooth v5.3 / UWB range search'
    },
    features: [
      'Compass view guidance leading directly to tags',
      'Lost Mode displays contact details via NFC scan',
      'SmartThings Find community network tracking',
      'Control smart IoT appliances via tag double click'
    ],
    securityRecs: [
      'Turn on Unknown Tag Alerts to prevent covert stalking exploits.',
      'Only bind tags with your secure personal Samsung Account.',
      'Audit shared location permission details in SmartThings Find app.'
    ]
  },
  {
    id: 'dji-mini-4',
    name: 'DJI Mini 4 Pro Drone',
    category: 'Accessories',
    price: 759,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80',
    description: 'Fly mini, create big. Under 249g weight, 4K/60fps HDR true vertical shooting, and omnidirectional obstacle sensing.',
    specs: {
      Weight: 'Ultralight 249 grams design limit',
      Camera: '1/1.3-inch CMOS sensor with 48MP resolution',
      Flight: 'Up to 34 minutes flight time (45 mins with Plus)',
      Transmission: 'DJI O4 FHD video transmission (20 km range)'
    },
    features: [
      'Omnidirectional active obstacle avoidance sensors',
      'True Vertical Shooting optimized for social media layouts',
      'ActiveTrack 360 camera path tracking controls',
      'Advanced Return to Home auto-landing routines'
    ],
    securityRecs: [
      'Bind drone components to your DJI account registration database.',
      'Audit Flight log sharing and cloud synchronization settings.',
      'Only connect control consoles over secure WPA2 endpoints.'
    ]
  },
  {
    id: 'keychron-q1',
    name: 'Keychron Q1 Max Keyboard',
    category: 'Accessories',
    price: 219,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    description: 'Full metal QMK custom mechanical keyboard. Double-gasket design, custom CNC aluminum body, and hot-swappable switches.',
    specs: {
      Layout: '75% Layout configuration profile',
      Body: 'Full CNC machined aluminum chassis build',
      Switches: 'Hot-swappable Keychron K Pro mechanical switches',
      Connectivity: '2.4GHz / Bluetooth 5.1 / Type-C Wired'
    },
    features: [
      'QMK/VIA customization support for layout key remapping',
      'Double-gasket structural design for quiet click acoustic damping',
      'South-facing RGB backlight LED arrays',
      'Mac/Windows layout hotkey selector toggles'
    ],
    securityRecs: [
      'Keep VIA browser configuration portal links secure.',
      'Avoid installing untrusted custom binary layout builds.',
      'Configure secure pairing passwords for wireless Bluetooth mode.'
    ]
  },
  {
    id: 'airpods-max',
    name: 'Apple AirPods Max',
    category: 'Headphones',
    price: 549,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=600&q=80',
    description: 'The ultimate over-ear headphone experience. Premium design, high-fidelity audio, and industry-leading Active Noise Cancellation.',
    specs: {
      Type: 'Over-ear wireless noise-cancelling headphones',
      Processor: 'Apple H1 Headphone Chip in each ear cup',
      Battery: 'Up to 20 hours listening time on single charge',
      Sensors: 'Optical, position, case-detect, and accelerometer sensors'
    },
    features: [
      'High-fidelity custom audio driver delivers clean output',
      'Active Noise Cancellation and Transparency listening presets',
      'Spatial audio with dynamic head tracking',
      'Knit mesh canopy and memory foam ear cushions'
    ],
    securityRecs: [
      'Update headphones firmware automatically via linked iOS devices.',
      'Unbind legacy devices from Find My network database lists.',
      'Audit location and tracking telemetry data in privacy manager.'
    ]
  }
];

export const PLANS: SecurityPlan[] = [
  {
    id: 'antivirus-plus',
    name: 'Bitdefender Antivirus Plus',
    subtitle: 'Essential security for Windows PCs',
    price: '29.99',
    devices: 'Up to 3 PCs / Windows',
    features: [
      'Real-time protection against viruses, ransomware, spyware',
      'Multi-layer ransomware protection',
      'Safe online banking protection (Safepay)',
      'Secure VPN (200MB daily traffic)',
      'Vulnerability assessment scanner',
    ],
    idealFor: 'Windows desktop users needing core real-time threat protection during browsing and online banking.',
    level: 'Basic',
  },
  {
    id: 'total-security',
    name: 'Bitdefender Total Security',
    subtitle: 'Complete protection for all major operating systems',
    price: '49.99',
    devices: 'Up to 5 devices (Windows, macOS, Android, iOS)',
    features: [
      'Cross-platform security protection (All OS)',
      'Device Speed Optimizer (OneClick Optimizer)',
      'Parental Controls for child digital safety',
      'Privacy firewall block hacks',
      'Webcam & Microphone protection guards',
      'Anti-theft and device location recovery tools',
    ],
    idealFor: 'Families and multi-device owners wanting a single dashboard to monitor and secure laptops and smartphones.',
    level: 'Advanced',
  },
  {
    id: 'premium-security',
    name: 'Bitdefender Premium Security',
    subtitle: 'Ultimate security and complete privacy suite',
    price: '79.99',
    devices: 'Up to 10 devices (Windows, macOS, Android, iOS)',
    features: [
      'Unlimited VPN encrypted traffic proxying',
      'Full-featured Password Manager premium version',
      'Priority live technical assistance and VIP support',
      'Premium Parent Protection layers',
      'Complete Identity Theft Protection alarms',
      'Advanced browser security indicators',
    ],
    idealFor: 'Power users looking for zero-compromise security combined with unlimited VPN and complete identity monitoring.',
    level: 'Ultimate',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'what-is-malware',
    title: 'Demystifying Malware: The Hidden Threat Vector',
    excerpt: 'What actually happens when malware executes? Explore the modern lifecycle of malware from infection vectors to payload deployment.',
    category: 'Threat Alerts',
    readTime: '6 min read',
    date: 'August 14, 2026',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    content: 'Malware is any software intentionally designed to cause disruption, leak sensitive information, or gain unauthorized access. Today, cybercriminals deploy modular malware codebases that download specific payloads depending on the targets defenses. Learn how modern AI scanners detect behavioral threats rather than static signatures.'
  },
  {
    id: 'understanding-ransomware',
    title: 'Understanding Ransomware: Tactics, Techniques & Recovery',
    excerpt: 'Ransomware remains a primary digital risk. Understand key containment methods and why multi-layer backups are your best fallback.',
    category: 'Security News',
    readTime: '8 min read',
    date: 'August 19, 2026',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    content: 'Ransomware typically functions by targeting system files, executing rapid AES-256 or RSA-2048 encryption algorithms, and deleting shadow copies to prevent OS recovery points from restoring access. Bitdefender protects systems by monitoring active file-modification loops and isolating suspicious threads automatically.'
  },
  {
    id: 'how-phishing-works',
    title: 'Anatomy of a Phishing Attack: Spoofing & Social Engineering',
    excerpt: 'Modern phishing emails look identical to official correspondences. Learn how to scan headers, certificates, and URLs to spot the trap.',
    category: 'Safe Habits',
    readTime: '5 min read',
    date: 'August 21, 2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    content: 'Social engineering tricks you into giving away authentication tokens, credit card info, or personal metadata. Phishing campaigns often deploy temporary SSL certificates to mimic official login portals. Security software intercepts these domain links using reputation cloud checks.'
  },
  {
    id: 'secure-new-laptop',
    title: 'Crucial Security Steps for Setting Up a New Laptop',
    excerpt: 'Just bought a brand new laptop? Here is your step-by-step checklist to ensure it is secure out of the box.',
    category: 'Guides',
    readTime: '7 min read',
    date: 'August 22, 2026',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    content: 'Setting up a new laptop is exciting, but leaving it unconfigured is a massive security risk. Always begin by setting up full disk encryption (FileVault or BitLocker), applying outstanding OS security patches, updating default network configurations, and installing robust cross-platform security suites.'
  }
];

export const TROUBLESHOOTING_ISSUES = [
  {
    id: 'inst-fail',
    title: 'Installation failed or interrupted',
    category: 'Installation',
    solution: 'This typically happens due to pre-existing security products, leftover installation remnants, or lack of administrator permissions. First, run the official Bitdefender Uninstall Tool to scrub previous records, restart your computer, then execute the downloaded installer as an Administrator.'
  },
  {
    id: 'act-code-err',
    title: 'Activation code not working / already used',
    category: 'Subscription',
    solution: 'Activation codes are one-time use tokens to bind subscription licenses to your Bitdefender Central Account. Once bound, you do not need to re-enter it on every device. Simply log into the Bitdefender app using your registered Central account credentials to inherit the active subscription license.'
  },
  {
    id: 'vpn-conn-drop',
    title: 'VPN connection dropping or failing to connect',
    category: 'VPN',
    solution: 'VPN connectivity issues are usually caused by local network restrictions, firewalls, or strict router configurations. Try toggling between UDP and TCP protocols in the Bitdefender VPN application settings, or whitelist Bitdefender processes inside your third-party firewall/modem configurations.'
  },
  {
    id: 'slow-pc',
    title: 'Computer feels slow after scanning',
    category: 'Device',
    solution: 'During the first scan, Bitdefender builds an index cache of safe files to speed up subsequent scans. To optimize system resources, configure the OneClick Optimizer tool inside Bitdefender Total Security or schedule deep system scans during idle or off-peak hours.'
  }
];
