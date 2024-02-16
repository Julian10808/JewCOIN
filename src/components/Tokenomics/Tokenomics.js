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
          After three months, all Jewcoins will have been rescued or burned.
          Once this happens, the Jewcoin Liquidity Pool will open up, and
          Jewcoin rescuers can sell their Jewcoin to those who didn’t get a
          chance to acquire tokens during the burn. Anyone who has saved
          Jewcoins from Auchwallet can immediately open their own liquidity
          pool, but we won't open one until the burn is finished. We encourage
          everyone to buy Jewcoin directly from Auchwallet and not from another
          user (while the burn is still ongoing), as those Jewcoins have already
          been rescued. Once the LP is live, the Jewcoin price will fluctuate in
          real time based on the amount being sold and incoming demand for
          Jewcoins. 50% of all Ethereum acquired from the Jewcoin token burn
          sale will be saved and deposited into the Liquidity pool to prevent
          the Jewcoin price from tanking and show the Jewcoin community that
          there will not be a rug pull. The other 50% will be used for funding
          further development of Jewcoin and loading the liquidity pool in the
          future if needed to stabilize the price. Six million JewCoins is the
          maximum amount that can ever exist. Jewcoins can’t be divided as each
          Jewcoin represents a potential casualty of the burn. Either a whole
          Jewcoin is saved, or it is burned. Shekel, on the other hand, is
          extremely divisible, with the smallest increment being
          .000000000000000001 Shekel. The burn begins on February 24th, with
          66,000 burned at the end of each day. The number of Jewcoins rescued
          each day will be subtracted from the daily rate of 66,000. If one
          Jewcoin is rescued, then 65,999 will burn that day. If 60,000 Jewcoins
          are rescued, only 6,000 will burn that day. More than 66,000 Jewcoins
          saved in a day does not affect the amount burned the following day.
          The price of Jewcoin will increase as more Jewcoins are rescued, with
          increases coming for every 1 million saved. Jewcoin starting price:
          .15 USDC, .15 USDT or corresponding amount in ETH.
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
          chance to acquire tokens during the burn. Anyone who has saved
          Jewcoins from Auchwallet can immidietly open up their own liquidity
          pool, but we wont be opening one until the burn is finished. We
          encourage everyone to buy Jewcoin directly from Auchwallet and not
          from another user (while the burn is still ongoing) as those Jewcoins
          have already been rescued. Once the LP is live, the Jewcoin price will
          fluctuate in real-time based on the amount being sold and incoming
          demand for Jewcoins. 50% of all ethereum acquired from the Jewcoin
          token burn sale will be saved and deposited into the Liquidity pool to
          prevent the Jewcoin price from tanking and show the Jewcoin community
          that there will not be a rugpull. The other 50% will be used for
          funding further development of Jewcoin and loading the liquidity pool
          in the future if needed to stabilize price.
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
