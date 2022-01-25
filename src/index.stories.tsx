// @ts-nocheck
import React from 'react';
import { View } from 'react-native';
import { AnsiComponent } from './index';
import { withKnobs, color } from '@storybook/addon-knobs';

const lines = [
  '\u001b[1;32m * \u001b[0m\u001b[1;37mLIBS         libuv/1.42.0 OpenSSL/1.1.1l hwloc/2.5.1rc1-git\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mHUGE PAGES   \u001b[0m\u001b[1;32msupported\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37m1GB PAGES    \u001b[0m\u001b[1;33munavailable\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mCPU          ARMv8 (1)\u001b[0m \u001b[1;32m64-bit\u001b[0m \u001b[1;32mAES\u001b[0m',
  '\u001b[1;37m                \u001b[0m\u001b[1;30mL2:\u001b[0m\u001b[1;37m0.0 MB\u001b[0m\u001b[1;30m L3:\u001b[0m\u001b[1;37m0.0 MB\u001b[0m\u001b[1;36m 1\u001b[0mC\u001b[1;30m/\u001b[0m\u001b[1;36m4\u001b[0mT\u001b[1;30m NUMA:\u001b[0m\u001b[1;36m1\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mMEMORY       \u001b[0m\u001b[1;36m1.9/2.0\u001b[0m\u001b[0;36m GB\u001b[0m\u001b[1;30m (96%)\u001b[0m\u001b[0m',
  '\u001b[1;32m * \u001b[0m\u001b[1;37mDONATE       \u001b[0m\u001b[1;37m\u001b[1;31m0%\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.127\u001b[0m] \u001b[100m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35margon2/chukwav2\u001b[1;37m Preparation \u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.127\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m use \u001b[1;37margon2\u001b[0m implementation \u001b[1;33mdefault\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.142\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[0;33m stopped\u001b[0m\u001b[1;30m (15 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.142\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m use profile \u001b[44m\u001b[1;37m argon2 \u001b[0m\u001b[1;37m (\u001b[1;36m4\u001b[0m\u001b[1;37m threads)\u001b[0m scratchpad \u001b[1;36m1024 KB\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.149\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[1;32m READY\u001b[0m threads \u001b[1;36m24/24 (4)\u001b[0m huge pages \u001b[1;31m0% 0/4\u001b[0m memory \u001b[1;36m4096 KB\u001b[0m\u001b[1;30m (7 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:18:45\u001b[1;30m.150\u001b[0m] \u001b[100m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35margon2/chukwav2\u001b[1;37m Starting test \u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.155\u001b[0m] \u001b[100m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35mrx/0\u001b[1;37m Preparation \u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[0;33m stopped\u001b[0m\u001b[1;30m (16 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;35minit dataset\u001b[0m algo \u001b[1;37mrx/0 (\u001b[0m\u001b[1;36m4\u001b[0m\u001b[1;37m threads)\u001b[0m\u001b[1;30m seed 0000000000000000...\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[0;31m\u001b[0m\u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;31mfast RandomX mode disabled by config\u001b[0m',
  '[2022-01-24 23:19:05\u001b[1;30m.172\u001b[0m] \u001b[0;33m\u001b[0m\u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;33mfailed to allocate RandomX dataset, switching to slow mode\u001b[1;30m (0 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:06\u001b[1;30m.969\u001b[0m] \u001b[44m\u001b[1;37m randomx \u001b[0m \u001b[1;32mdataset ready\u001b[0m\u001b[1;30m (1796 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:06\u001b[1;30m.969\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m use profile \u001b[44m\u001b[1;37m rx \u001b[0m\u001b[1;37m (\u001b[1;36m4\u001b[0m\u001b[1;37m threads)\u001b[0m scratchpad \u001b[1;36m2048 KB\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:06\u001b[1;30m.971\u001b[0m] \u001b[46;1m\u001b[1;37m cpu     \u001b[0m\u001b[1;32m READY\u001b[0m threads \u001b[1;36m28/28 (4)\u001b[0m huge pages \u001b[1;31m0% 0/4\u001b[0m memory \u001b[1;36m8192 KB\u001b[0m\u001b[1;30m (3 ms)\u001b[0m\u001b[0m',
  '[2022-01-24 23:19:07\u001b[1;20m.106\u001b[4m] \u001b[1;36m\u001b[1;36m benchmk \u001b[0m \u001b[100m\u001b[1;37m Algo \u001b[1;35mrx/0\u001b[1;37m Starting test \u001b[0m\u001b[0m',
];

export default {
  title: 'Console Log',
  decorators: [withKnobs],
};

const Template = ({ showLines }) => {
  //👇 Assigns the function result to a variable

  const lineStyle = {
    backgroundColor: color('Background', '#6c7a89'),
  };

  const defaultTextStyle = {
    color: color('Default Font Color', 'white'),
  };

  return (
    <View style={{ flex: 1 }}>
      {showLines.map((line, index) => (
        <AnsiComponent
          textStyle={defaultTextStyle}
          containerStyle={lineStyle}
          ansi={line}
          key={`k-${index}`}
        />
      ))}
    </View>
  );
};

export const XMRig_Stdout = Template.bind({});
XMRig_Stdout.args = {
  showLines: lines,
};

export const Background_Colors_256 = Template.bind({});
Background_Colors_256.args = {
  showLines: [
    '\u001b[48;5;0m        \u001b[48;5;1m        \u001b[48;5;2m        \u001b[48;5;3m        \u001b[48;5;4m        \u001b[48;5;5m        \u001b[48;5;6m        \u001b[48;5;7m        \u001b[48;5;8m        \u001b[48;5;9m        \u001b[48;5;10m        \u001b[48;5;11m        \u001b[48;5;12m        \u001b[48;5;13m        \u001b[48;5;14m        \u001b[48;5;15m        \u001b[m',
    '\u001b[48;5;16m        \u001b[48;5;17m        \u001b[48;5;18m        \u001b[48;5;19m        \u001b[48;5;20m        \u001b[48;5;21m        \u001b[48;5;22m        \u001b[48;5;23m        \u001b[48;5;24m        \u001b[48;5;25m        \u001b[48;5;26m        \u001b[48;5;27m        \u001b[48;5;28m        \u001b[48;5;29m        \u001b[48;5;30m        \u001b[48;5;31m        \u001b[m',
    '\u001b[48;5;32m        \u001b[48;5;33m        \u001b[48;5;34m        \u001b[48;5;35m        \u001b[48;5;36m        \u001b[48;5;37m        \u001b[48;5;38m        \u001b[48;5;39m        \u001b[48;5;40m        \u001b[48;5;41m        \u001b[48;5;42m        \u001b[48;5;43m        \u001b[48;5;44m        \u001b[48;5;45m        \u001b[48;5;46m        \u001b[48;5;47m        \u001b[m',
    '\u001b[48;5;48m        \u001b[48;5;49m        \u001b[48;5;50m        \u001b[48;5;51m        \u001b[48;5;52m        \u001b[48;5;53m        \u001b[48;5;54m        \u001b[48;5;55m        \u001b[48;5;56m        \u001b[48;5;57m        \u001b[48;5;58m        \u001b[48;5;59m        \u001b[48;5;60m        \u001b[48;5;61m        \u001b[48;5;62m        \u001b[48;5;63m        \u001b[m',
    '\u001b[48;5;64m        \u001b[48;5;65m        \u001b[48;5;66m        \u001b[48;5;67m        \u001b[48;5;68m        \u001b[48;5;69m        \u001b[48;5;70m        \u001b[48;5;71m        \u001b[48;5;72m        \u001b[48;5;73m        \u001b[48;5;74m        \u001b[48;5;75m        \u001b[48;5;76m        \u001b[48;5;77m        \u001b[48;5;78m        \u001b[48;5;79m        \u001b[m',
    '\u001b[48;5;80m        \u001b[48;5;81m        \u001b[48;5;82m        \u001b[48;5;83m        \u001b[48;5;84m        \u001b[48;5;85m        \u001b[48;5;86m        \u001b[48;5;87m        \u001b[48;5;88m        \u001b[48;5;89m        \u001b[48;5;90m        \u001b[48;5;91m        \u001b[48;5;92m        \u001b[48;5;93m        \u001b[48;5;94m        \u001b[48;5;95m        \u001b[m',
    '\u001b[48;5;96m        \u001b[48;5;97m        \u001b[48;5;98m        \u001b[48;5;99m        \u001b[48;5;100m        \u001b[48;5;101m        \u001b[48;5;102m        \u001b[48;5;103m        \u001b[48;5;104m        \u001b[48;5;105m        \u001b[48;5;106m        \u001b[48;5;107m        \u001b[48;5;108m        \u001b[48;5;109m        \u001b[48;5;110m        \u001b[48;5;111m        \u001b[m',
    '\u001b[48;5;112m        \u001b[48;5;113m        \u001b[48;5;114m        \u001b[48;5;115m        \u001b[48;5;116m        \u001b[48;5;117m        \u001b[48;5;118m        \u001b[48;5;119m        \u001b[48;5;120m        \u001b[48;5;121m        \u001b[48;5;122m        \u001b[48;5;123m        \u001b[48;5;124m        \u001b[48;5;125m        \u001b[48;5;126m        \u001b[48;5;127m        \u001b[m',
    '\u001b[48;5;128m        \u001b[48;5;129m        \u001b[48;5;130m        \u001b[48;5;131m        \u001b[48;5;132m        \u001b[48;5;133m        \u001b[48;5;134m        \u001b[48;5;135m        \u001b[48;5;136m        \u001b[48;5;137m        \u001b[48;5;138m        \u001b[48;5;139m        \u001b[48;5;140m        \u001b[48;5;141m        \u001b[48;5;142m        \u001b[48;5;143m        \u001b[m',
    '\u001b[48;5;144m        \u001b[48;5;145m        \u001b[48;5;146m        \u001b[48;5;147m        \u001b[48;5;148m        \u001b[48;5;149m        \u001b[48;5;150m        \u001b[48;5;151m        \u001b[48;5;152m        \u001b[48;5;153m        \u001b[48;5;154m        \u001b[48;5;155m        \u001b[48;5;156m        \u001b[48;5;157m        \u001b[48;5;158m        \u001b[48;5;159m        \u001b[m',
    '\u001b[48;5;160m        \u001b[48;5;161m        \u001b[48;5;162m        \u001b[48;5;163m        \u001b[48;5;164m        \u001b[48;5;165m        \u001b[48;5;166m        \u001b[48;5;167m        \u001b[48;5;168m        \u001b[48;5;169m        \u001b[48;5;170m        \u001b[48;5;171m        \u001b[48;5;172m        \u001b[48;5;173m        \u001b[48;5;174m        \u001b[48;5;175m        \u001b[m',
    '\u001b[48;5;176m        \u001b[48;5;177m        \u001b[48;5;178m        \u001b[48;5;179m        \u001b[48;5;180m        \u001b[48;5;181m        \u001b[48;5;182m        \u001b[48;5;183m        \u001b[48;5;184m        \u001b[48;5;185m        \u001b[48;5;186m        \u001b[48;5;187m        \u001b[48;5;188m        \u001b[48;5;189m        \u001b[48;5;190m        \u001b[48;5;191m        \u001b[m',
    '\u001b[48;5;192m        \u001b[48;5;193m        \u001b[48;5;194m        \u001b[48;5;195m        \u001b[48;5;196m        \u001b[48;5;197m        \u001b[48;5;198m        \u001b[48;5;199m        \u001b[48;5;200m        \u001b[48;5;201m        \u001b[48;5;202m        \u001b[48;5;203m        \u001b[48;5;204m        \u001b[48;5;205m        \u001b[48;5;206m        \u001b[48;5;207m        \u001b[m',
    '\u001b[48;5;208m        \u001b[48;5;209m        \u001b[48;5;210m        \u001b[48;5;211m        \u001b[48;5;212m        \u001b[48;5;213m        \u001b[48;5;214m        \u001b[48;5;215m        \u001b[48;5;216m        \u001b[48;5;217m        \u001b[48;5;218m        \u001b[48;5;219m        \u001b[48;5;220m        \u001b[48;5;221m        \u001b[48;5;222m        \u001b[48;5;223m        \u001b[m',
    '\u001b[48;5;224m        \u001b[48;5;225m        \u001b[48;5;226m        \u001b[48;5;227m        \u001b[48;5;228m        \u001b[48;5;229m        \u001b[48;5;230m        \u001b[48;5;231m        \u001b[48;5;232m        \u001b[48;5;233m        \u001b[48;5;234m        \u001b[48;5;235m        \u001b[48;5;236m        \u001b[48;5;237m        \u001b[48;5;238m        \u001b[48;5;239m        \u001b[m',
    '\u001b[48;5;240m        \u001b[48;5;241m        \u001b[48;5;242m        \u001b[48;5;243m        \u001b[48;5;244m        \u001b[48;5;245m        \u001b[48;5;246m        \u001b[48;5;247m        \u001b[48;5;248m        \u001b[48;5;249m        \u001b[48;5;250m        \u001b[48;5;251m        \u001b[48;5;252m        \u001b[48;5;253m        \u001b[48;5;254m        \u001b[48;5;255m        \u001b[m',
  ],
};

export const Colors_256 = Template.bind({});
Colors_256.args = {
  showLines: [
    '\u001b[38;5;0m000 \u001b[38;5;1m001 \u001b[38;5;2m002 \u001b[38;5;3m003 \u001b[38;5;4m004 \u001b[38;5;5m005 \u001b[38;5;6m006 \u001b[38;5;7m007 \u001b[38;5;8m008 \u001b[38;5;9m009 \u001b[38;5;10m010 \u001b[38;5;11m011 \u001b[38;5;12m012 \u001b[38;5;13m013 \u001b[38;5;14m014 \u001b[38;5;15m015 [m',
    '\u001b[38;5;16m016 \u001b[38;5;17m017 \u001b[38;5;18m018 \u001b[38;5;19m019 \u001b[38;5;20m020 \u001b[38;5;21m021 \u001b[38;5;22m022 \u001b[38;5;23m023 \u001b[38;5;24m024 \u001b[38;5;25m025 \u001b[38;5;26m026 \u001b[38;5;27m027 \u001b[38;5;28m028 \u001b[38;5;29m029 \u001b[38;5;30m030 \u001b[38;5;31m031 [m',
    '\u001b[38;5;32m032 \u001b[38;5;33m033 \u001b[38;5;34m034 \u001b[38;5;35m035 \u001b[38;5;36m036 \u001b[38;5;37m037 \u001b[38;5;38m038 \u001b[38;5;39m039 \u001b[38;5;40m040 \u001b[38;5;41m041 \u001b[38;5;42m042 \u001b[38;5;43m043 \u001b[38;5;44m044 \u001b[38;5;45m045 \u001b[38;5;46m046 \u001b[38;5;47m047 [m',
    '\u001b[38;5;48m048 \u001b[38;5;49m049 \u001b[38;5;50m050 \u001b[38;5;51m051 \u001b[38;5;52m052 \u001b[38;5;53m053 \u001b[38;5;54m054 \u001b[38;5;55m055 \u001b[38;5;56m056 \u001b[38;5;57m057 \u001b[38;5;58m058 \u001b[38;5;59m059 \u001b[38;5;60m060 \u001b[38;5;61m061 \u001b[38;5;62m062 \u001b[38;5;63m063 [m',
    '\u001b[38;5;64m064 \u001b[38;5;65m065 \u001b[38;5;66m066 \u001b[38;5;67m067 \u001b[38;5;68m068 \u001b[38;5;69m069 \u001b[38;5;70m070 \u001b[38;5;71m071 \u001b[38;5;72m072 \u001b[38;5;73m073 \u001b[38;5;74m074 \u001b[38;5;75m075 \u001b[38;5;76m076 \u001b[38;5;77m077 \u001b[38;5;78m078 \u001b[38;5;79m079 [m',
    '\u001b[38;5;80m080 \u001b[38;5;81m081 \u001b[38;5;82m082 \u001b[38;5;83m083 \u001b[38;5;84m084 \u001b[38;5;85m085 \u001b[38;5;86m086 \u001b[38;5;87m087 \u001b[38;5;88m088 \u001b[38;5;89m089 \u001b[38;5;90m090 \u001b[38;5;91m091 \u001b[38;5;92m092 \u001b[38;5;93m093 \u001b[38;5;94m094 \u001b[38;5;95m095 [m',
    '\u001b[38;5;96m096 \u001b[38;5;97m097 \u001b[38;5;98m098 \u001b[38;5;99m099 \u001b[38;5;100m100 \u001b[38;5;101m101 \u001b[38;5;102m102 \u001b[38;5;103m103 \u001b[38;5;104m104 \u001b[38;5;105m105 \u001b[38;5;106m106 \u001b[38;5;107m107 \u001b[38;5;108m108 \u001b[38;5;109m109 \u001b[38;5;110m110 \u001b[38;5;111m111 [m',
    '\u001b[38;5;112m112 \u001b[38;5;113m113 \u001b[38;5;114m114 \u001b[38;5;115m115 \u001b[38;5;116m116 \u001b[38;5;117m117 \u001b[38;5;118m118 \u001b[38;5;119m119 \u001b[38;5;120m120 \u001b[38;5;121m121 \u001b[38;5;122m122 \u001b[38;5;123m123 \u001b[38;5;124m124 \u001b[38;5;125m125 \u001b[38;5;126m126 \u001b[38;5;127m127 [m',
    '\u001b[38;5;128m128 \u001b[38;5;129m129 \u001b[38;5;130m130 \u001b[38;5;131m131 \u001b[38;5;132m132 \u001b[38;5;133m133 \u001b[38;5;134m134 \u001b[38;5;135m135 \u001b[38;5;136m136 \u001b[38;5;137m137 \u001b[38;5;138m138 \u001b[38;5;139m139 \u001b[38;5;140m140 \u001b[38;5;141m141 \u001b[38;5;142m142 \u001b[38;5;143m143 [m',
    '\u001b[38;5;144m144 \u001b[38;5;145m145 \u001b[38;5;146m146 \u001b[38;5;147m147 \u001b[38;5;148m148 \u001b[38;5;149m149 \u001b[38;5;150m150 \u001b[38;5;151m151 \u001b[38;5;152m152 \u001b[38;5;153m153 \u001b[38;5;154m154 \u001b[38;5;155m155 \u001b[38;5;156m156 \u001b[38;5;157m157 \u001b[38;5;158m158 \u001b[38;5;159m159 [m',
    '\u001b[38;5;160m160 \u001b[38;5;161m161 \u001b[38;5;162m162 \u001b[38;5;163m163 \u001b[38;5;164m164 \u001b[38;5;165m165 \u001b[38;5;166m166 \u001b[38;5;167m167 \u001b[38;5;168m168 \u001b[38;5;169m169 \u001b[38;5;170m170 \u001b[38;5;171m171 \u001b[38;5;172m172 \u001b[38;5;173m173 \u001b[38;5;174m174 \u001b[38;5;175m175 [m',
    '\u001b[38;5;176m176 \u001b[38;5;177m177 \u001b[38;5;178m178 \u001b[38;5;179m179 \u001b[38;5;180m180 \u001b[38;5;181m181 \u001b[38;5;182m182 \u001b[38;5;183m183 \u001b[38;5;184m184 \u001b[38;5;185m185 \u001b[38;5;186m186 \u001b[38;5;187m187 \u001b[38;5;188m188 \u001b[38;5;189m189 \u001b[38;5;190m190 \u001b[38;5;191m191 [m',
    '\u001b[38;5;192m192 \u001b[38;5;193m193 \u001b[38;5;194m194 \u001b[38;5;195m195 \u001b[38;5;196m196 \u001b[38;5;197m197 \u001b[38;5;198m198 \u001b[38;5;199m199 \u001b[38;5;200m200 \u001b[38;5;201m201 \u001b[38;5;202m202 \u001b[38;5;203m203 \u001b[38;5;204m204 \u001b[38;5;205m205 \u001b[38;5;206m206 \u001b[38;5;207m207 [m',
    '\u001b[38;5;208m208 \u001b[38;5;209m209 \u001b[38;5;210m210 \u001b[38;5;211m211 \u001b[38;5;212m212 \u001b[38;5;213m213 \u001b[38;5;214m214 \u001b[38;5;215m215 \u001b[38;5;216m216 \u001b[38;5;217m217 \u001b[38;5;218m218 \u001b[38;5;219m219 \u001b[38;5;220m220 \u001b[38;5;221m221 \u001b[38;5;222m222 \u001b[38;5;223m223 [m',
    '\u001b[38;5;224m224 \u001b[38;5;225m225 \u001b[38;5;226m226 \u001b[38;5;227m227 \u001b[38;5;228m228 \u001b[38;5;229m229 \u001b[38;5;230m230 \u001b[38;5;231m231 \u001b[38;5;232m232 \u001b[38;5;233m233 \u001b[38;5;234m234 \u001b[38;5;235m235 \u001b[38;5;236m236 \u001b[38;5;237m237 \u001b[38;5;238m238 \u001b[38;5;239m239 [m',
    '\u001b[38;5;240m240 \u001b[38;5;241m241 \u001b[38;5;242m242 \u001b[38;5;243m243 \u001b[38;5;244m244 \u001b[38;5;245m245 \u001b[38;5;246m246 \u001b[38;5;247m247 \u001b[38;5;248m248 \u001b[38;5;249m249 \u001b[38;5;250m250 \u001b[38;5;251m251 \u001b[38;5;252m252 \u001b[38;5;253m253 \u001b[38;5;254m254 \u001b[38;5;255m255 [m',
  ],
};
