const fs = require('fs');
const path = require('path');

const imgDir = 'c:\\Users\\manpr\\OneDrive\\Documents\\Antigravity Projects\\manuresume\\assets\\images';

const renames = {
  '2Uh9tvdiJS5gK3xQ80RvotML1o.webp': 'elias_avatar.webp',
  'wepiAzXGP0MIzYeiI3MxQYbxI.webp': 'elias_portrait.webp',
  'YBiDvrhxA9ILSK74Tog0MPNET0.webp': 'work_hanssen.webp',
  'DadZVrWsisBUrrLSxrpozQ47Yw.webp': 'work_fjord.webp',
  '4CPbURsMiQJktRsozjXUyFhOBBI.webp': 'work_ayano.webp',
  '5x9eubo8UVBMONBn0ptYd2Ugg1o.webp': 'work_qitchen.webp',
  '40zMhxQOIMl00qtqmVHZwfQh0E0.webp': 'review_thumb.webp',
  'D9U8PVdaTYaVQwVHjX6TXLpfj8.webp': 'sarah_avatar.webp',
  'MQwmX8vMrm4JKSShVkTzPODDiM.webp': 'hanssen_detail.webp',
  '0MiVRT3GPnzbnMRJwSsdRJUgs.webp': 'blog_1_trends.webp',
  'YX1LJcAtEILOYhnkvwbaFNogXNU.webp': 'blog_2_ux.webp',
  'oKF9qQTXSRe6DshGXNKPziA7Sc.webp': 'blog_3_mistakes.webp',
  'ICLoAlbnkuoQ4wCff6SskSabe8.webp': 'blog_4_framer_webflow.webp',
  'CJPuTbHnyhvVVAGBzpRSgzlnTQ.webp': 'blog_5_responsive.webp',
  '79g8IouME7zsF2HwDw8eJt7MdIk.png': 'og_image.png',
  'rPtNHsVSs98jVk9FvDA6WMJjIs.webp': 'favicon_light.webp',
  '5SlqO9xsReFEAQrfrKAwuidRPc.webp': 'favicon_dark.webp',
  'xVzBqzXOVHbTsVCms7NWD53H7U.png': 'apple_touch_icon.png'
};

for (const [src, dest] of Object.entries(renames)) {
  const srcPath = path.join(imgDir, src);
  const destPath = path.join(imgDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  }
}
