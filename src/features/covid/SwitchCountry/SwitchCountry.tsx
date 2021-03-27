import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchAsyncGetCountry } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const countries = {
    china: {
      ja: "中国",
      en: "china",
    },
    france: {
      ja: "フランス",
      en: "france",
    },
    italy: {
      ja: "イタリア",
      en: "italy",
    },
    spain: {
      ja: "スペイン",
      en: "spain",
    },
    uk: {
      ja: "イギリス",
      en: "united kingdom",
    },
    germany: {
      ja: "ドイツ",
      en: "germany",
    },
    russia: {
      ja: "ロシア",
      en: "russia",
    },
    brazil: {
      ja: "ブラジル",
      en: "brazil",
    },
    taiwan: {
      ja: "台湾",
      en: "taiwan",
    },
    thailand: {
      ja: "タイ",
      en: "thailand",
    },
    nz: {
      ja: "ニュージーランド",
      en: "new zealand",
    },
    sweden: {
      ja: "スウェーデン",
      en: "sweden",
    },
    india: {
      ja: "インド",
      en: "india",
    },
  };

  const countyKeyArray = Object.keys(countries) as (keyof typeof countries)[];;

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetCountry(e.target.value))
        }
      >
        <option value="">Worldwide</option>
        {countyKeyArray.map((countryKey, i) => (
            <option key={i} value={countries[countryKey].en}>
              {countries[countryKey].ja}
            </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
