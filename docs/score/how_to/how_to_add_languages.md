# How to add new Languages?

Reference Commit: `https://github.com/Ssomar-Developement/SCore/commit/4ba23530a0e79cc26ecb52678f6c02aed2a2df29`  
  
## Go to the Locale class and add an enum for your language

Directory: `src/main/java/com/ssomar/score/config/Locale.java`
Ex:
```
ZH("中文"), // Chinese;
ID("Bahasa Indonesia"), // Indonesian;
AR("العربية"), // Arabic
PL("Polski"), // Polish
```

## Create a new class file for your language

Directory: `src/main/java/com/ssomar/score/features/lang/`

Ex: Visit `com.ssomar.score.features.lang.FeatureSettingsSCorePL`

:::info
It's best to try use some tool or AI to translate `src/main/java/com/ssomar/score/features/lang/FeatureSettingsSCoreEN_FLAT.txt`
into whatever language you want but make sure to make the tool only translate the second and third elements.

Segment of the EN_FLAT.txt file:
```
    DisplayFeatures("DisplayFeatures", "Display Features", new String[]{""}, Material.ITEM_FRAME),
    EXECUTABLEBLOCK("EXECUTABLEBLOCK", "Executable Block", new String[]{}, FixedMaterial.getMaterial(Arrays.asList("GRASS_BLOCK", "GRASS"))),
    EXECUTABLEBLOCKPLACED("EXECUTABLEBLOCKPLACED", "Executable Block Placed", new String[]{}, FixedMaterial.getMaterial(Arrays.asList("GRASS_BLOCK", "GRASS"))),
    EXECUTABLEEVENT("EXECUTABLEEVENT", "Executable Event", new String[]{}, Material.EMERALD),
    EXECUTABLEITEM("EXECUTABLEITEM", "Executable Item", new String[]{}, Material.EMERALD),
    EXECUTABLELEVER("EXECUTABLELEVER", "Executable Lever", new String[]{}, Material.LEVER),
```
:::

## Go to FeatureSettingsSCore.java and add a switch case statement

Directory: `src/main/java/com/ssomar/score/features/FeatureSettingsSCore.java`

Example:
```
            case VI:
                return FeatureSettingsSCoreVI.values();
```

In the case value above, we will be referencing the class file we made at step 2.

## Go to the /resources/languages/ directory and create a yml file for your language

Sample File: `src/main/resources/languages/language_vi.yml`

Try finding languages_en.yml and translate its value pairs to your chosen language

Contents:
```yml
editor:
  back:
    name: "&4&l⬅ &cQuay Lại"
  creation:
    id:
      name: "&2&l✚ &a&lID Tạo Mới:"
  delete:
    name: "&4&l✘ &cXóa"
    normal:
      description: "&4&lX &cNhấp vào đây để xóa"
    shift:
      left:
        description: "&4&lX &cShift + Nhấp trái để xóa"
      description: "&4&lX &cShift + Nhấp để xóa"
    message: "&cNày, nếu bạn muốn xóa %object%"
  edit:
    description: "&a✎ Nhấp vào đây để thay đổi"
  exit:
    name: "&4&l✘ &cThoát"
  folder:
    name: "&2&l✦ THƯ MỤC: &a"
    description: ["", "&7Nhấp vào đây để mở thư mục"]
  give:
    shift:
      right:
        description: "&2✔ &aShift + Nhấp phải để nhận cho bản thân"
    receivedMessage: "&aBạn đã nhận được &e"
  invalid:
    file:
      name: "&4&l✦ TỆP KHÔNG HỢP LỆ: &c&o"
      description: "&7Plugin chỉ có thể tải các tệp &e.yml &7"
    configuration:
      name: "&4&l✦ CẤU HÌNH KHÔNG HỢP LỆ: &c&o"
      description: "&7Bạn nên chỉnh sửa tệp cấu hình của mình"
      freeLimit: "&7Hãy đảm bảo rằng bạn chưa vượt quá giới hạn của phiên bản miễn phí"
  new:
    name: "&a&l➕ &aMới"
  page:
    name: " - Trang "
    next:
      name: "&dTrang tiếp &5&l▶"
    previous:
      name: "&5&l◀ &dTrang trước"
  path:
    name: "&6&l✦ &eĐƯỜNG DẪN:"
    description: ["&8&oNhấp vào đây để quay lại", "&8&otrong thư mục trước"]
  premade:
    premium:
      name: "&5&l✚ &d%object% Premium Mặc Định"
    packs:
      name: "&5&l✚ &d%object% từ Gói Tùy Chỉnh"
  premium:
    description: "&5&l❂ &d&lChỉ dành cho Premium &5&l❂"
    requirePremiumToAddMore: "&cCẦN PREMIUM: để thêm nhiều hơn %limit% %object% bạn cần phiên bản Premium"
  reset:
    name: "&4&l✘ &cĐặt Lại"
    description:
      - ""
      - "&c&oNhấp vào đây để đặt lại"
      - "&c&oTất cả các tùy chọn của tạo mới này"
  save:
    name: "&a&l✔ &aLưu"
    description:
      - ""
      - "&a&oNhấp vào đây để lưu"
      - "&a&oCấu hình của bạn!"
  title:
    color: "&e&l"
  currently:
    name: "&7✦ Hiện tại:"
```

## Create a yml file in /resources/locale/

Sample File: `src/main/resources/locale/Locale_VI.yml`

Contents: 
```yml
errorMoneyMsg: "&4&l[SCore] &cBạn không có: &6%amount%$ &ctrong tài khoản của bạn! &6(&eHiện tại: &a%balance%$&6)"
newBalanceMsg: "&6&l[SCore] &eGiao dịch: &c-%amount%$ &eSố dư mới: &a%balance%$"
newBalancePositiveMsg: "&6&l[SCore] &eGiao dịch: &a%amount%$ &eSố dư mới: &a%balance%$"
setActionbarOn: "&aBạn đã bật actionbar &a&lON"
haveActionbarOn: "&aActionbar của bạn đã ở trạng thái &a&lON"
setActionbarOff: "&cBạn đã tắt actionbar &4&lOFF"
haveActionbarOff: "&cActionbar của bạn đã ở trạng thái &4&lOFF"
actionbarMessage: "&a&lThời gian còn lại cho &e&l%item% &a&l: &e&l%time%"
actionbarEnd: "&c&lHỦY KÍCH HOẠT &e&l%item%"
damageCommandKill: "&8%target% &7đã chết bởi lệnh gây sát thương"
noPlayerHit: "&cKhông có người chơi nào bị trúng"
noEntityHit: "&cKhông có thực thể nào bị trúng"
variableValueSet: "&e&l[SCore] &aGiá trị đã được đặt!"
variableDefaultValueSet: "&e&l[SCore] &aGiá trị mặc định đã được đặt!"
shapeExecuted: "&2[SCore] &aHình dạng đã được thực thi!"
```

## Conclusion

You are expected to make 3 files and 2 file changes. If your pull request says otherwise, you might have either edited the wrong files or overdid something.