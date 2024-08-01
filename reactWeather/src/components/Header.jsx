import { InputLocation } from "./Header/InputLocation"
import { WeatherNow } from "./Header/NavigateBut"
import { WeatherTomorrow } from "./Header/WeatherTomorrow"
import { WeatherToday } from "./Header/WeatherToday"
import { WeatherWeek } from "./Header/WeatherWeek"
import { TimeNow } from "./Header/TimeNow"

export function Header () {
    return (
        <div className="header">
            <InputLocation />
            <WeatherNow />
            <WeatherToday />
            <WeatherTomorrow />
            <WeatherWeek />
            <TimeNow />
        </div>
    )
}