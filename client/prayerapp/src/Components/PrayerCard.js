const PrayerCard = ({prayerData}) => {
        return(
                <div className="container">
                        <div className="dates">
                        <span>{prayerData.gregorian_date + ' CE'}</span>
                        <span>{prayerData.hijri_date + ' AH'}</span>
                        </div>
                        <div className='timings'>
                        <li key='Fajr'>
                                <strong>Fajr:</strong> {prayerData.fajr_timing}
                        </li>
                        <li key='Dhuhr'>
                                <strong>Dhuhr:</strong> {prayerData.dhuhr_timing}
                        </li>
                        <li key='Asr'>
                                <strong>Asr:</strong> {prayerData.asr_timing}
                        </li>
                        <li key='Maghrib'>
                                <strong>Maghrib:</strong> {prayerData.maghrib_timing}
                        </li>
                        <li key='Isha'>
                                <strong>Isha:</strong> {prayerData.isha_timing}
                        </li>
                        </div>
                </div>
        )
}

export default PrayerCard