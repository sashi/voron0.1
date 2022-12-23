var e={app:{bedmesh:{label:{box_scale:"顯示比例",flat_surface:"顯示參考平面",mesh_matrix:"網格矩陣",probed_matrix:"探測點矩陣",profile_name:"配置文件",remove_profile:"删除 %{name} 配置文件",scale:"顯示偏差值",wireframe:"顯示網格線"},msg:{hint:"如果將 %{name} 另存, 你也可以選擇刪除此 %{name} 配置",not_found:"熱床網格配置不存在",not_loaded:"熱床網格配置不存在"},tooltip:{calibrate:"開始校準，該校準信息會默認保存為 defalut",delete:"刪除配置。該操作將會重啟你的打印機",load:"加載配置",save:"將校準的配置文件應用於 printer.cfg。該操作將會重啟你的打印機"}},chart:{label:{current:"當前值",item:"名稱",off:"關閉圖表",on:"開啟圖表",power:"功率",rate_of_change:"變化值",target:"目標值"},tooltip:{help:"按住 Shift 鍵可縮放圖表。<br />單擊一個項目名稱或功率可在圖表中切換顯示。"}},console:{label:{auto_scroll:"自動滾動",flip_layout:"翻轉布局",hide_temp_waits:"隱藏溫度信息"},placeholder:{command:"按 'tab' 自動補全命令，按 '↑↓' 鍵獲取歷史命令，輸入 'help' 獲取命令幫助",scroll:"滾動至底部"}},endpoint:{error:{cant_connect:"出了點問題，Fluidd 無法連接目標。你確定這是正確的設備地址？",cors_error:"被 CORS 政策阻止，請查看 Moonraker 幫助",cors_note:'這可能意味著您需要修改 Moonraker 配置。請參閱有關多打印機設置的<a href=\\"%{url}\\" target=\\"_blank\\">文檔</a>'},hint:{add_printer:"例如：http://fluiddpi.local"},msg:{trouble:'遇到麻煩？<a href="%{url}" target="_blank">點擊此處</a> 查看更多信息。'},tooltip:{endpoint_examples:"輸入您的 Moonraker API 地址。<br />例如：<br/><blockquote>http://fluidd.local, http://192.168.1.276</blockquote>"}},endstop:{label:{open:"未觸發",triggered:"已觸發"},msg:{subtitle:"使用“刷新”按鈕更新限位開關狀態。"}},file_system:{filters:{label:{print_start_time:"隱藏已打印項目",print_start_time_desc:"隱藏已經打印的項目文件"}},label:{dir_name:"目錄名稱",disk_usage:"磁盤使用率",diskinfo:"磁盤信息",downloaded:"下載完成",file_name:"文件名",transfer_rate:"傳輸速率",uploaded:"上傳完成"},msg:{confirm:"你確定需要這樣操作嗎？這將刪除選中的文件和目錄。",not_found:"文件未找到",processing:"處理中..."},overlay:{label:"<strong>拖動</strong> 一個文件到這里"},title:{add_dir:"新建目錄",add_file:"新建文件",download_file:"下載文件",rename_dir:"重命名目錄",rename_file:"重命名文件",upload_file:"上傳文件"},tooltip:{low_on_space:"磁盤空間不足",root_disabled:"{root} G代碼文件目錄不可用，請首先連接打印機或者檢查G代碼存放目錄的路徑與讀權限"},url:{klipper_config:"https://www.klipper3d.org/zh-Hant/Config_Reference.html#%{hash}"}},gcode:{btn:{load_current_file:"載入當前文件"},label:{current_layer_height:"當前層高",follow_progress:"跟隨打印進度",layer:"當前層數",layers:"總層數",parsed:"已解析",parsing_file:"解析文件",show_extrusions:"顯示已打印部分",show_moves:"顯示移動走線",show_next_layer:"顯示下一層",show_previous_layer:"顯示上一層",show_retractions:"顯示回抽"},msg:{confirm:'文件 "%{filename}" 大小為 %{size}，這可能會導致系統短暫失去響應，是否確認？'}},general:{btn:{add:"添加",add_dir:"新建目錄",add_file:"新建文件",add_printer:"添加打印機",adjust_layout:"調整儀表板布局",all:"全部",calibrate:"校準",cancel:"取消",clear_profile:"清除配置文件",close:"關閉",config_reference:"配置參考",download:"下載",edit:"編輯",exit_layout:"退出修改模式",extrude:"擠出",heaters_off:"停止加熱",load_all:"全部加載",more_information:"更多信息",pause:"暫停",preheat:"預熱",presets:"預設",preview_gcode:"預覽 Gcode",quad_gantry_level:"龍門架調平",reboot:"重啟",refresh:"刷新",remove:"删除",remove_all:"删除全部",rename:"重命名",reprint:"重新打印",reset_file:"重置文件",reset_layout:"重置布局",reset_stats:"重置統計信息",restart_firmware:"重啟Firmware",restart_service:"重啟 %{service}",restart_service_klipper:"重啟Klipper",restart_service_moonraker:"重啟Moonraker",resume:"恢覆",retract:"回抽",save:"保存",save_as:"另存為",save_restart:"保存並重啟",send:"發送",set_color:"設置顏色",shutdown:"關閉",socket_reconnect:"重新連接",socket_refresh:"強制刷新",upload:"上傳",upload_print:"上傳並打印",view:"查看"},error:{app_setup_link:'如需查看 Fluidd 詳細配置規則，請點擊<a target="_blank" href="%{url}">此處</a>。',app_warnings_found:"％{appName} 出現警告",components_config:'如需查看 Moonraker 詳細配置規則，請點擊<a target="_blank" href="%{url}">此處</a>。',failed_components:"Moonraker 插件啟用失敗，請檢查您的日志，更新您的配置並重新啟動 Moonraker。"},label:{accel_to_decel:"加速到減速度",acceleration:"加速度",actual_time:"實際剩余",add_camera:"添加攝像頭",add_category:"添加分類",add_filter:"添加過濾",add_preset:"添加預設",add_user:"添加用戶",alias:"别名",api_key:"API 密鑰",api_url:"Moonraker 服務器地址",apply_z_offset:"應用並保存Z軸偏移量",category:"分類",change_password:"更改密碼",clear_all:"全部清除",color:"顏色",confirm:"確認",current_password:"當前密碼",disabled_while_printing:"打印時禁用",edit_camera:"編輯攝像頭設置",edit_category:"編輯分類",edit_filter:"編輯過濾器",edit_preset:"編輯預設",edit_user:"編輯用戶",extrude_length:"擠出距離",extrude_speed:"擠出速度",filament:"已用耗材",file:"文件名稱",file_time:"預計剩余",finish_time:"完成時間",flow:"擠出流量",free:"可用",heaters_busy:"打印機正忙。關閉熱端有可能會導致打印失敗。",high:"最高溫度",host:"主機",layer:"層數",layout:"布局",longest_job:"單次耗時最長",low:"最低溫度",m117:"M117",name:"名稱",new_password:"新密碼",no_notifications:"暫無通知",off:"關閉",on:"開啟",password:"密碼",power:"設備",pressure_advance:"壓力補償",printers:"打印機列表",progress:"當前層進度",requested_speed:"請求速度",retract_length:"回抽距離",retract_speed:"回抽速度",save_as:"另存為",services:"服務",slicer:"切片剩余",smooth_time:"平滑時間",speed:"移動速度",sqv:"轉角速度",total:"已用時間",total_filament:"總消耗耗材",total_filament_avg:"平均消耗耗材",total_jobs:"總任務次數",total_print_time:"總打印時間",total_print_time_avg:"平均打印時間",total_time:"總時間",total_time_avg:"平均時間",uncategorized:"未分類",unretract_extra_length:"回抽額外裝填量",unretract_speed:"回抽裝填速度",unsaved_changes:"未保存的修改",used:"已用",variance:"偏差值",velocity:"速度",visible:"可見性",z_offset:"Z軸偏移"},msg:{password_changed:"密碼已更改",wrong_password:"密碼錯誤"},simple_form:{error:{arrayofnums:"僅允許輸入數字",exists:"用戶已存在",invalid_expression:"無效表達",invalid_number:"無效數字",invalid_url:"無效的URL地址",max:"最大 %{max}",min:"長度最小%{min}位",min_or_0:"最小 %{min} 或 0",password_username:"用戶名密碼不匹配",required:"必填"},msg:{apply_z_offset_endstop:"Z軸限位偏移將以當前Z軸偏移量的基礎上進行計算並更新",apply_z_offset_probe:"自動調平的Z軸偏移量將以當前Z軸偏移量的基礎上進行計算並更新",confirm:"是否確認？",confirm_power_device_toggle:"這會切換設備開關狀態！是否確認？",confirm_reboot_host:"這會重啟您的系統！是否確認？",confirm_service_restart:"你確定要重啟 %{name} 服務嗎?",confirm_service_stop:"你確定要停止 %{name} 服務嗎?",confirm_shutdown_host:"這會關閉您的系統！是否確認？",unsaved_changes:"這會丟失未保存的更改！是否確認？"}},table:{header:{actions:"展開",end_time:"結束時間",estimated_time:"預計時間",filament:"預計使用耗材",filament_used:"實際使用耗材",filament_weight_total:"耗材重量",first_layer_bed_temp:"起始層熱床溫度",first_layer_extr_temp:"起始層擠出溫度",first_layer_height:"起始層高",height:"模型高度",last_printed:"上次打印時間",layer_height:"層高",modified:"修改時間",name:"名稱",print_duration:"打印時間",size:"文件大小",slicer:"切片軟件",slicer_version:"軟件版本",start_time:"開始時間",status:"狀態",total_duration:"總耗時"}},title:{add_printer:"添加打印機",bedmesh:"熱床網格補償",bedmesh_controls:"熱床網格控制",camera:"攝像頭",config_files:"配置文件",configure:"配置",console:"控制台",endstops:"限位開關",fans_outputs:"風扇和輸出",gcode_preview:"Gcode 預覽",history:"任務歷史",home:"儀表板",jobs:"任務列表",limits:"打印機限制",macros:"宏",other_files:"其他文件（日志、文檔及參考配置）",retract:"固件回抽",runout_sensors:"斷料檢測傳感器",settings:"設置",stats:"打印任務統計",system:"系統",system_overview:"系統信息",temperature:"溫度",tool:"移動控制",tune:"調整"},tooltip:{estop:"緊急停止",reload_klipper:"重新載入 Klipper 配置文件",reload_restart_klipper:"重新載入 Klipper 配置並重啟 MCU",restart_klipper:"重啟 Klipper 服務"}},history:{msg:{confirm_jobs:"這會清除任務歷史信息！是否確認？",confirm_stats:"這會清除狀態統計信息！是否確認？"}},printer:{state:{busy:"處理中",cancelled:"已取消",complete:"完成",idle:"空閒",loading:"加載中",paused:"已暫停",printing:"打印中",ready:"就緒",standby:"待機"}},setting:{btn:{add_camera:"添加攝像頭",add_category:"添加分類",add_filter:"添加過濾器",add_thermal_preset:"添加預設",add_user:"添加用戶",reset:"重置",select_theme:"選擇顏色"},camera_rotate_options:{90:"90度",180:"180度",270:"270度",none:"不旋轉"},camera_type_options:{iframe:"HTTP 頁面",mjpegadaptive:"MJPEG 自適應",mjpegstream:"MJPEG 視頻流",video:"IP 攝像頭"},label:{all_off:"全部禁用",all_on:"全部啟用",auto_edit_extensions:"自動進入編輯模式的文件類型",camera_flip_x:"水平翻轉",camera_flip_y:"垂直翻轉",camera_rotate_by:"旋轉角度",camera_stream_type:"視頻流類型",camera_url:"攝像頭地址",confirm_dirty_editor_close:"編輯器有未保存的更改時需要確認",confirm_on_estop:"緊急停止時是否需要確認",confirm_on_power_device_change:"改變設備開關狀態時需要確認",contains:"包含字符",dark_mode:"深色模式",date_time_format:"日期和時間格式",default_extrude_length:"默認擠出距離",default_extrude_speed:"默認擠出速度",default_toolhead_move_length:"默認打印頭移動距離",default_toolhead_xy_speed:"默認 XY 軸移動速度",default_toolhead_z_speed:"默認 Z 軸移動速度",draw_background:"顯示背景",enable:"啟用",enable_notifications:"更新通知",expression:"表達式",extrusion_line_width:"擠出線寬",filter:"過濾器列表",flip_horizontal:"水平翻轉",flip_vertical:"垂直翻轉",fps_idle_target:"未對焦時 FPS",fps_target:"FPS",gcode_coords:"使用 GCode 坐標",group_lower_layers:"下層分組",height:"高度",invert_x_control:"反轉X軸控制",invert_y_control:"反轉Y軸控制",invert_z_control:"反轉Z軸控制",language:"顯示語言",move_line_width:"移動線寬",primary_color:"主色调",printer_name:"打印機名稱",reset:"重置設定",retraction_icon_size:"回抽圖標大小",show_animations:"顯示動畫",show_rate_of_change:"顯示溫度變化值",starts_with:"起始字符",theme_preset:"預設主題",thermal_preset_gcode:"GCode",thermal_preset_name:"預設名稱",toolhead_move_distances:"擠出頭移動距離預設值",type:"類型",z_adjust_values:"Z軸偏移量"},timer_options:{duration:"僅顯示已用時間",filament:"通過耗材用量估算",file:"通過文件進度估算",slicer:"使用切片文件的時間"},title:{authentication:"安全認證",camera:"攝像頭",console:"控制台",file_editor:"文本編輯器",gcode_preview:"GCode 預覽",general:"常規",macros:"宏",theme:"主題",thermal_presets:"溫度預設",tool:"移動控制"},tooltip:{gcode_coords:"使用 GCode 坐標位置而不是儀表板上的打印頭坐標位置"}},socket:{msg:{connecting:"正在連接至 Moonraker ...",no_connection:"沒有連接 Moonraker。請檢查 Moonraker 的狀態和/或刷新以重試。"}},system_info:{label:{capacity:"容量",cpu_desc:"CPU",distribution_codename:"開發代號",distribution_like:"基於發行版",distribution_name:"發行版",hardware_desc:"硬件描述",hostname:"主機名",klipper_load:"Klipper 負載",manufactured:"生產日期",manufacturer:"制造商",mcu_awake:"{mcu} 喚醒時間",mcu_bandwidth:"{mcu} 帶寬占用",mcu_load:"{mcu} 負載",model:"型號",moonraker_load:"Moonraker 負載",processor_desc:"處理器描述",product_name:"產品名稱",serial_number:"序列號",system_load:"系統負載",system_memory:"系統內存",system_utilization:"系統利用率",total_memory:"内存"}},tool:{btn:{home_all:"全部歸位",home_x:"歸位X",home_y:"歸位Y"},tooltip:{bed_screws_adjust:"手動調平螺絲",extruder_disabled:"擠出機操作已被禁用，低於 min_extrude_temp 設置的最低溫度 (%{min}<small>°C</small>)",home_xy:"歸位 XY",home_z:"歸位 Z",motors_off:"關閉電機",quad_gantry_level:"龍門架調平",screws_tilt_calculate:"輔助調平螺絲",z_tilt_adjust:"Z軸傾斜調整"}},version:{btn:{check_for_updates:"檢查更新",finish:"完成",update:"更新",view_versions:"查看版本"},label:{commit_history:"提交歷史",commits_on:"提交於",committed:"提交完成",dirty:"污染",invalid:"無效",os_packages:"系統組件",package_list:"軟件包列表",up_to_date:"最新",updates_available:"有可用更新"},status:{finished:"更新已完成",updating:"正在更新..."},title:"軟件更新",tooltip:{commit_history:"提交歷史",dirty:"本地文件被污染，無法從線上的 git 庫進行更新",invalid:"本地文件無效，無法從線上的 git 庫進行更新",packages:"軟件包",release_notes:"發行說明"}}}};export{e as default};
