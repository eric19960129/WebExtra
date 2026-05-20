//所有的data
const portalConfig = {
 zh: {
  title: "入口網站",
  sections: [
   {
    category: "個人網頁",
    icon: "code",
    items: [
     { name: "PRD", label: "正式環境", url: "https://eric19960129.github.io/Web/index.html?keyName=Home", color: "bg-blue-600", sub: "Live Server" },
     { name: "Pre-PRD", label: "預備環境", url: "https://myweb-preprd-32fed.web.app/", color: "bg-emerald-600", sub: "Pre Live Server" },
     { name: "DEV", label: "開發環境", url: "https://myweb-dev-48d00.web.app/", color: "bg-purple-600", sub: "Development" }
    ]
   }//,
   // {
   //  category: "管理與文檔",
   //  icon: "tool",
   //  items: [
   //   { name: "DOC", label: "技術文件庫", url: "#", color: "bg-orange-600", sub: "Knowledge Base" }
   //  ]
   // },
  ]
 },
 en: {
  title: "Web Portal",
  sections: [
   {
    category: "MyWeb",
    icon: "code",
    items: [
     { name: "PRD", label: "Production", url: "https://eric19960129.github.io/Web/index.html?keyName=Home", color: "bg-blue-600", sub: "Live Server" },
     { name: "Pre-PRD", label: "Pre Production", url: "https://myweb-preprd-32fed.web.app/", color: "bg-emerald-600", sub: "Pre Live Server" },
     { name: "DEV", label: "Development", url: "https://myweb-dev-48d00.web.app/", color: "bg-purple-600", sub: "Development" }
    ]
   }
  ]
 }
};

//每一個大tab對應的icon
const icons = {
 code: `<svg class="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
 tool: `<svg class="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m10 4a2 2 0 100-4m0 4a2 2 0 110-4M6 20v-2m10 2v-2m-7-4h4"></path></svg>`
};

//先用三種顏色呈現每一個大tab
const sectionThemes = [
 { bg: "bg-blue-100/40 dark:bg-blue-900/20", border: "border-blue-600", text: "text-blue-700 dark:text-blue-400" },
 { bg: "bg-purple-100/40 dark:bg-purple-900/20", border: "border-purple-600", text: "text-purple-700 dark:text-purple-400" },
 { bg: "bg-orange-100/40 dark:bg-orange-900/20", border: "border-orange-600", text: "text-orange-700 dark:text-orange-400" }
];