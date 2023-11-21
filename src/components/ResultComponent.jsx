export default function ABSComponent({selectBehavior}) {
    const translateType = {
        'abs' : 'อาการปวดท้อง',
        'finger' : 'อาการปวดนิ้ว'
    }
    const translateBehavior = {
        'dip' : 'ข้อนิ้วส่วนปลาย',
        'mcp' : 'ข้อโคนนิ้งมือ',
        'pip' : 'ข้อนิ้วมือส่วนต้น',
        'umbilicus' : 'รอบสะดือ',
        'epigastrium' : 'ลิ้นปี่',
        'llq' : 'ช่องท้องด้านล่างซ้่าย',
        'luq' : 'ช่องท้องด้านบนซ้่าย',
        'suprapubic' : 'ท้องน้อย',
        'ruq' : 'ช่องท้องด้านบนขวา',
        'rlq' : 'ช่องท้องด้านล่างขวา',
        'all' : 'ปวดทั้งหมด',
    }
    return (
        <div className="w-[300px] h-[300px]">
            {
                selectBehavior.map(item => {
                    return (
                        <li key={item.type} className="text-xl">{translateType[item.type]} - <span className="underline">{translateBehavior[item.behavior]}</span></li>
                    )
                })
            }
            {selectBehavior.length <= 0 && <li>ไม่พบข้อมูล</li>}
        </div>
    )
}