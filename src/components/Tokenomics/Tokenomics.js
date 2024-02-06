import { SvgStakingRightArrow } from "assets/svg";
import s from "./Tokenomics.module.css";

const Tokenomics = () => {
  return (
    <div className={s.root} id="tokenomics_panel">
      <div className={s.leftWrapper}>
        <img
          src="assets/images/staking.png"
          alt="sunshine"
          className="lg:min-w-[367px] lg:min-h-[367px] lg:w-[367px] w-full h-[233px] min-h-[233px] object-cover"
          style={{
            borderRadius: "115px 0px",
            boxShadow: "0px 4px 120px 0px rgba(255, 227, 0, 0.70)",
          }}
        />
      </div>
      <div className={s.rightWrapper}>
        <div className="text-[30px] sm:text-[40px] text-[#FFE300] font-bold font-sefer">
          Tokenomics - Price Action - Liquidity Pool
        </div>
        {/* <div
					className="text-[14px] sm:text-[18px] font-semibold mt-[10px]"
					style={{ color: 'rgba(11, 7, 24, 0.30)' }}
				>
					Staking your jewcoin
				</div> */}
        <SvgStakingRightArrow />
        <div className="text-[12px] sm:text-[18px] text-white font-semibold mt-[30px]">
          {/* <div className="text-[#FFE300] font-sefer text-[23px]"></div> */}
          Six million JewCoins is the maximum amount that can ever exist.
          <br />
          The smallest denomination of a Jew coin is 0.000001 and is called a
          Shekel. The burn begins on February 24th, with 66,000 burned at the
          end of each day. The amount of Jewcoin rescued each day will be
          subtracted from the daily rate of 66,000. If one Jewcoin is rescued,
          then 65,999 will burn that day. If 60,000 Jewcoin are rescued, only
          6,000 will burn that day. More than 66,000 Jewcoins saved in a day
          does not affect the amount burned the following day.The price of
          Jewcoin will increase as more Jewcoins are rescued, with increases
          coming for every 1 million saved.
          <p>
            <br />
            Jewcoin starting price: .15 USDC, .15 USDT or corresponding amount
            in ETH.
            <br />
            <br />
            Jewcoin price after 1 million tokens rescued: .2 USDC, .2 USDT, or
            the corresponding amount in ETH.
            <br />
            <br />
            Jewcoin price after 2 million tokens rescued: .25 USDC, .25 USDT, or
            the corresponding amount in ETH.
            <br />
            <br />
            Jewcoin price after 3 million tokens rescued: .3 USDC, .3 USDT, or
            the corresponding amount in ETH.
            <br />
            <br /> Jewcoin price after 4 million tokens rescued: .35 USDC, .35
            USDT, or the corresponding amount in ETH.
            <br />
            <br />
            Jewcoin price after 5 million tokens rescued: .4 USDC, .4 USDT, or
            the corresponding amount in ETH.
          </p>
          <br />
          After three months, all Jewcoins will have been rescued or burned.
          Once this happens, the Jewcoin Liquidity Pool will open up, and
          Jewcoin rescuers can sell their Jewcoin to those who didn’t get a
          chance to acquire tokens during the burn. There will be a 3%
          buy-and-sell fee for all transactions in the pool; after all, this is
          Jewcoin. Once the LP is live, the Jewcoin price will fluctuate in
          real-time based on the amount being sold and incoming demand for
          Jewcoins. 69% of all ethereum acquired from the Jewcoin token burn
          sale will be saved and deposited into the Liquidity pool to prevent
          the Jewcoin price from tanking and show the Jewcoin community that
          there will not be a rugpull. The other 31% will be used for funding
          further development of Jewcoin and loading the liquidity pool in the
          future if needed to stabilize price.
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
